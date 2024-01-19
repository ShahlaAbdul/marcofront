import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

function AddPage() {
  const [fetchAdd, setfetchAdd] = useState([]);
  
  useEffect(() => {
 getAll()
  }, [])
  function getAll() {
       fetch("http://localhost:3100/")
       .then((res) => res.json())
        .then((data) => setfetchAdd(data));
  }
  async function handleAdd(value) {
    fetch("http://localhost:3100/", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    await getAll()
  }

  async function handleDelete(id){
    fetch("http://localhost:3100/"+id, {
      method: "DELETE"
    })
    await getAll()
  }


  // useEffect(() => {
  //   getAll();
  // }, []);

  // function getAll() {
  //   fetch("http://localhost:3100/")
  //     .then((res) => res.json())
  //     .then((data) => setfetchAdd(data));
  // }

  // async function handleAdd(val) {
  //   fetch("http://localhost:3100/", {
  //     method: "POST",
  //     body: JSON.stringify(val),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //  await  getAll()
  // }

  // async function handleDelete(id) {
  //   fetch("http://localhost:3100/" + id, {
  //     method: "DELETE"
  //   });
  //      await  getAll()
  // }

  return (
    // <div className=" addpage">
    //   <Helmet>
    //     <title>AddPage</title>
    //   </Helmet>

    //   <Formik
    //     initialValues={{ name: "", description: "", price: "" }}
    //     validationSchema={Yup.object({
    //       name: Yup.string()
    //         .max(15, "Must be 15 characters or less")
    //         .required("Required"),
    //       description: Yup.string()
    //         .max(20, "Must be 20 characters or less")
    //         .required("Required"),
    //       price: Yup.string().required("Required"),
    //     })}
    //     onSubmit={(values, { setSubmitting }) => {
    //       setTimeout(() => {
    //         handleAdd(values);
    //         setSubmitting(false);
    //       }, 400);
    //     }}
    //   >
    //     <Form>
    //       <label htmlFor="name"> Name</label>
    //       <Field name="name" type="text" />
    //       <ErrorMessage name="name" />

    //       <label htmlFor="description"> description</label>
    //       <Field name="description" type="text" />
    //       <ErrorMessage name="description" />

    //       <label htmlFor="price">price </label>
    //       <Field name="price" type="number" />
    //       <ErrorMessage name="price" />

    //       <button type="submit">Submit</button>
    //     </Form>
    //   </Formik>

    //   <table>
    //     <tr>
    //       <th>Name</th>
    //       <th>Description</th>
    //       <th>Price</th>
    //       <th>Delete</th>
    //     </tr>
    //     {fetchAdd.map((x) => (
    //       <tr>
    //         <td>{x.name}</td>
    //         <td>{x.description}</td>
    //         <td>{x.price} </td>
    //         <td>
    //           {" "}
    //           <i className="fa-solid fa-trash" onClick={()=>handleDelete(x._id)}></i>
    //         </td>
    //       </tr>
    //     ))}
    //   </table>
    // </div>


    <div className="addpage">
      <Formik
        initialValues={{ name: "", description: "", price: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string()
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
          handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />

          <label htmlFor="description">description</label>
          <Field name="description" type="text" />

          <label htmlFor="price">price </label>
          <Field name="price" type="number" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
        {fetchAdd.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td>{x.price} </td>
            <td>
              {" "}
              <i
                className="fa-solid fa-trash" onClick={()=>handleDelete(x._id)}
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AddPage;
