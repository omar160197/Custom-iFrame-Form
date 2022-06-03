import { Box } from "@mui/material";
import styles from "./artistForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonBase, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ImportantStar from "../importantStar/artistImportantStar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addArtist } from "../../store/artistSlice/artistSlice";
import emailjs from "emailjs-com";

const ArtistForm = () => {
  const validationSchema = Yup.object({
    eventName: Yup.string().required("Enter Your eventName"),
    email: Yup.string()
      .email("valid email")
      .required("please Enter Your email"),
    phone1: Yup.string().required("Enter Your Phone"),
    phone2: Yup.string().required("Enter Your Phone"),
    requistedShowDate: Yup.date().required("Enter Your requistedShowDate"),
    startTime: Yup.string().required("Enter Your startTime"),
    finishTime: Yup.string().required("Enter Your finishTime"),
    facebookLink: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter facebook Link"),
    listeningLink: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Enter Your listeningLink"),
    eventHeld: Yup.string().required(
      "include where the last event/ live show was held"
    ),
    turnOut: Yup.string().required("include What was the turnoutand?"),
  });

  const [failed, setFailed] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      eventName: "",
      email: "",
      phone1: "",
      requistedShowDate: "",
      startTime: "",
      finishTime: "",
      facebookLink: "",
      phone2: "",
      listeningLink: "",
      eventHeld: "",
      turnOut: "",
    },

    onSubmit: (e, { resetForm }) => {
      console.log(e);
      emailjs
        .send("service_wr30fmg", "template_htanmha", e, "LfOeagLo3_vq1vwI7")
        .then((res) => {
          console.log("success");
          resetForm();
        })
        .catch((err) => console.log(err));
    },
    validationSchema,
  });

  return (
    <Box>
      <form className={styles.formClass} onSubmit={formik.handleSubmit}>
        {/* name */}
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={styles.inputContainer}>
              <label style={{marginTop:"17%"}} className={styles.bigLable} htmlFor="eventName">
                Artist / Event Name
                <ImportantStar />
              </label>
              <input
                id="eventName"
                type="text"
                name="eventName"
                className={
                  formik.touched.eventName && formik.errors.eventName
                    ? styles.error
                    : styles.email
                }
                {...formik.getFieldProps("eventName")}
              />
            </div>
            {formik.touched.eventName && formik.errors.eventName ? (
              <div style={{ color: "red" }} className="error">
                {formik.errors.eventName}
              </div>
            ) : null}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div className={styles.inputContainer}>
              <label className={styles.bigLable} htmlFor="email">
                Email
                <ImportantStar />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.error
                    : styles.email
                }
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }} className="error">
                {formik.errors.email}
              </div>
            ) : null}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div className={styles.inputContainer}>
              <label className={styles.bigLable} htmlFor="phone1">
                Phone
                <ImportantStar />
              </label>
              <input
                id="phone1"
                type="text"
                name="phone1"
                className={
                  formik.touched.phone1 && formik.errors.phone1
                    ? styles.error
                    : styles.email
                }
                {...formik.getFieldProps("phone1")}
              />
            </div>
            {formik.touched.phone1 && formik.errors.phone1 ? (
              <div style={{ color: "red" }} className="error">
                {formik.errors.phone1}
              </div>
            ) : null}
          </Grid>

          <Grid container item xs={12} sm={6} md={6}>
            <Grid item xs={12} sm={12} md={12}>
              <div className={styles.inputContainer}>
                <label className={styles.bigLable} htmlFor="requistedShowDate">
                  Requested Show Date
                  <ImportantStar />
                </label>
                <input
                  id="requistedShowDate"
                  type="date"
                  name="requistedShowDate"
                  className={
                    formik.touched.requistedShowDate &&
                    formik.errors.requistedShowDate
                      ? styles.error
                      : styles.email
                  }
                  {...formik.getFieldProps("requistedShowDate")}
                />
              </div>
              {formik.touched.requistedShowDate &&
              formik.errors.requistedShowDate ? (
                <div style={{ color: "red" }} className="error">
                  {formik.errors.requistedShowDate}
                </div>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <div className={styles.inputContainer}>
                <label htmlFor="startTime">
                  Start Time
                  <ImportantStar />
                </label>
                <input
                  style={{ position: "relative" }}
                  id="startTime"
                  type="time"
                  name="startTime"
                  className={
                    formik.touched.startTime && formik.errors.startTime
                      ? styles.error
                      : styles.email
                  }
                  {...formik.getFieldProps("startTime")}
                />
              </div>
              {formik.touched.startTime && formik.errors.startTime ? (
                <div style={{ color: "red" }} className="error">
                  {formik.errors.startTime}
                </div>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <div className={styles.inputContainer}>
                <label style={{ margingTop: "1%" }} htmlFor="startTime">
                  Finish Time
                  <ImportantStar />
                </label>
                <input
                  id="finishTime"
                  type="time"
                  name="finishTime"
                  className={
                    formik.touched.finishTime && formik.errors.finishTime
                      ? styles.error
                      : styles.email
                  }
                  {...formik.getFieldProps("finishTime")}
                />
              </div>
              {formik.touched.finishTime && formik.errors.finishTime ? (
                <div style={{ color: "red" }} className="error">
                  {formik.errors.finishTime}
                </div>
              ) : null}
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={6} md={6}>
              <div className={styles.inputContainer}>
                <label className={styles.bigLable} htmlFor="facebookLink">
                  Facebook Link
                  <ImportantStar />
                </label>
                <input
                  id="facebookLink"
                  type="url"
                  name="facebookLink"
                  className={
                    formik.touched.facebookLink && formik.errors.facebookLink
                      ? styles.error
                      : styles.email
                  }
                  {...formik.getFieldProps("facebookLink")}
                />
              </div>
              {formik.touched.facebookLink && formik.errors.facebookLink ? (
                <div style={{ color: "red" }} className="error">
                  {formik.errors.facebookLink}
                </div>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div className={styles.inputContainer}>
                <label className={styles.bigLable} htmlFor="phone2">
                  Phone
                  <ImportantStar />
                </label>
                <input
                  id="phone2"
                  type="text"
                  name="phone2"
                  className={
                    formik.touched.phone2 && formik.errors.phone2
                      ? styles.error
                      : styles.email
                  }
                  {...formik.getFieldProps("phone2")}
                />
              </div>
              {formik.touched.phone2 && formik.errors.phone2 ? (
                <div style={{ color: "red" }} className="error">
                  {formik.errors.phone2}
                </div>
              ) : null}
            </Grid>
          </Grid>
        </Grid>

        <div className={styles.inputContainer}>
          <label
            className={styles.bigLable}
            style={{ marginTop: "1%" }}
            htmlFor="listeningLink"
          >
            Listening Link (Spotify, Soundcloud etc)
            <ImportantStar />
          </label>
          <input
            id="listeningLink"
            type="url"
            name="listeningLink"
            className={
              formik.touched.listeningLink && formik.errors.listeningLink
                ? styles.error
                : styles.email
            }
            {...formik.getFieldProps("listeningLink")}
          />
        </div>
        {formik.touched.listeningLink && formik.errors.listeningLink ? (
          <div style={{ color: "red" }} className="error">
            {formik.errors.listeningLink}
          </div>
        ) : null}

        <p className={styles.subTitle}>ARTIST BIO / EVENT DESCRIPTION</p>
        {/* internalComments */}
        <div className={styles.secondInputContainer}>
          <label htmlFor="v">
            please include where the last event/ live show was held
          </label>
          <textarea
            id="eventHeld"
            name="eventHeld"
            style={{ width: "100%" }}
            rows="5"
            className={
              formik.touched.eventHeld && formik.errors.eventHeld
                ? styles.commentsError
                : styles.comments
            }
            {...formik.getFieldProps("eventHeld")}
          ></textarea>
        </div>
        {formik.touched.eventHeld && formik.errors.eventHeld ? (
          <div style={{ color: "red" }} className="error">
            {formik.errors.eventHeld}
          </div>
        ) : null}

        <div className={styles.secondInputContainer}>
          <label htmlFor="turnOut">
            {" "}
            What was the turnout and was it was ticketed or free entry?
          </label>
          <textarea
            id="turnOut"
            name="turnOut"
            style={{ width: "100%" }}
            rows="5"
            className={
              formik.touched.turnOut && formik.errors.turnOut
                ? styles.commentsError
                : styles.comments
            }
            {...formik.getFieldProps("turnOut")}
          ></textarea>
        </div>
        {formik.touched.turnOut && formik.errors.turnOut ? (
          <div style={{ color: "red" }} className="error">
            {formik.errors.turnOut}
          </div>
        ) : null}
        <div></div>

        {/* submition button */}
        <div className="parent">
          <ButtonBase className={styles.supmitButton} type="submit">
            SUBMIT
          </ButtonBase>
          {failed && (
            <p>
              There was a problem with your submission. Please fill out the
              missing the fields.
            </p>
          )}
        </div>
      </form>
    </Box>
  );
};
export default ArtistForm;
