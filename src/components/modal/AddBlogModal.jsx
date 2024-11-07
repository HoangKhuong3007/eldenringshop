import { useRef, useState } from "react";
import FileResizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleAddBlogModal } from "../../redux/slices/modal/modal";
// import service
import * as BlogService from "../../service/blog/blog";
export const AddBlogModal = () => {
  // ref
  const formRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  // dispatch
  const dispatch = useDispatch();
  // state
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreventSubmit, setIsPreventSubmit] = useState(false);
  const [submitData, setSubmitData] = useState({
    userId: user?.userId,
    image: "",
    title: "",
    content: "",
  });
  // mutation
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: BlogService.createBlog,
    onMutate: () => {
      setIsPreventSubmit(true);
    },
    onSuccess: () => {
      toast.success("Add blog successful", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        setIsPreventSubmit(false);
        location.reload();
      }, 1500);
      queryClient.invalidateQueries(["blogs"]);
    },
  });
  // file
  const resizeFile = (file) => {
    FileResizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      300,
      0,
      (uri) => {
        setPreviewImage(uri);
        setSubmitData({
          ...submitData,
          image: uri,
        });
      },
      "base64",
      250,
      250
    );
  };
  //   handle func
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({
      ...submitData,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (isPreventSubmit) {
      toast.error("On processing, try again!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!submitData.content || !submitData.image || !submitData.title) {
      toast.error("Please input all fields", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (submitData.title.trim() === "") {
      toast.error("Please input title", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      await mutation.mutateAsync(submitData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  const handleToggleAddBlogModal = () => {
    dispatch(toggleAddBlogModal());
  };
  const removeChooseImage = () => {
    setPreviewImage(null);
    setSubmitData({
      ...submitData,
      image: "",
    });
  };
  return (
    <div className="add-blog-modal-container">
      <ToastContainer />
      <div className="add-blog-modal">
        <div className="header">
          <div>
            <i className="bx bx-book-content"></i>
            <p>Add Blog</p>
          </div>
          <i className="bx bx-x" onClick={handleToggleAddBlogModal}></i>
        </div>
        <form
          action=""
          onSubmit={handleOnSubmit}
          ref={formRef}
          autoComplete="new-password"
          className="add-blog-form"
        >
          <div className="input-image">
            <div>
              {previewImage ? (
                <>
                  <label htmlFor="image">
                    <img src={previewImage} alt="" />
                  </label>
                </>
              ) : (
                <>
                  <label htmlFor="image">
                    <i className="bx bx-image-add"></i>
                    <p>Click to choose image for blog header</p>
                  </label>
                </>
              )}
              <input
                type="file"
                name=""
                id="image"
                onChange={(e) => resizeFile(e.target.files[0])}
              />
            </div>
            <small onClick={removeChooseImage}>Clear the image</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Blog title*</label>
            <input
              type="text"
              name="title"
              onChange={handleOnChange}
              placeholder="Enter title..."
            />
            <small>Input the blog title here</small>
          </div>
          <div className="input-content">
            <label htmlFor="">Content*</label>
            <textarea
              name="content"
              onChange={handleOnChange}
              id=""
              placeholder="Enter content..."
            ></textarea>
            <small>Input the blog content here</small>
          </div>
        </form>
        <div className="submit">
          <button onClick={handleToggleAddBlogModal}>Return</button>
          <button onClick={handleExternalSubmit}>Confirm create blog</button>
        </div>
      </div>
    </div>
  );
};
