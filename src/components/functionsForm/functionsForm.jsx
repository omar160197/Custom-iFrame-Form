import { Box } from "@mui/material";
import styles from "./functionForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonBase, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import FunctionsImportantStar from "../importantStar/functionImportantStar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFunction } from "../../store/functionSlice/functionSlice";
import emailjs from "emailjs-com";

const FunctionForm = () => {
  const validationSchema = Yup.object({
    contactName: Yup.string().required("Enter Your contactName"),
    email: Yup.string().email("valid email").required("please Enter Your email"),
    numberOfGuests: Yup.number().required("Enter Your numberOfGuests"),
    approximateBudget: Yup.number().required("Enter Your approximateBudget"),
    datePreference: Yup.date().required("Enter Your datePreference"),
    startTime: Yup.string().required("Enter Your startTime"),
    finishTime: Yup.string().required("Enter Your finishTime"),
    company: Yup.string().required('Please enter company'),
    functionType: Yup.string().required("Enter Your functionType"),
    Venue: Yup.string().required("Enter your Venue"),
    message: Yup.string().required("Enter your Message, Comments, Questions"),
  });

  const [failed,setFailed]=useState(false)
  const dispatch=useDispatch()

  const formik = useFormik({
    initialValues: {
      contactName: "",
      email: "",
      numberOfGuests: "",
      datePreference: "",
      startTime: "",
      finishTime: "",
      company:"",
      approximateBudget:"",
      functionType:"",
      Venue:"",
      message:"",
    },

    onSubmit: (e, { resetForm }) => {
      console.log(e);
      emailjs
        .send("service_wr30fmg", "template_58ptdax", e, "LfOeagLo3_vq1vwI7")
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
        <Grid  container spacing={{ xs: 2, md: 2 }}>
         <Grid item xs={12} sm={12} md={12}>
         <div className={styles.inputContainer}>
          <label style={{marginTop:"17%"}} className={styles.bigLable} htmlFor="contactName">
          Contact Name
            <FunctionsImportantStar />
          </label>
          <input
            id="contactName"
            type="text"
            name="contactName"
            className={formik.touched.contactName &&formik.errors.contactName ? styles.error : styles.email}
            {...formik.getFieldProps("contactName")}
          />
        </div>
        {formik.touched.contactName && formik.errors.contactName ? (
          <div style={{ color: "#F1EDEA" }} className="error">
            {formik.errors.contactName}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="email">
          Email
            <FunctionsImportantStar />
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={formik.touched.email &&formik.errors.email ? styles.error : styles.email}
            {...formik.getFieldProps("email")}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div style={{color: "#F1EDEA" }} className="error">
            {formik.errors.email}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="company">
          Company
            <FunctionsImportantStar />
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className={formik.touched.company &&formik.errors.company ? styles.error : styles.email}
            {...formik.getFieldProps("company")}
          />
        </div>
        {formik.touched.company && formik.errors.company ? (
          <div style={{ color: "#F1EDEA"}} className="error">
            {formik.errors.company}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="Venue">
          Venue
            <FunctionsImportantStar />
          </label>
          <select
             className={styles.selector}
             id="Venue" 
             name="Venue"
             {...formik.getFieldProps("Venue")}
             >
                  <option  value={"Whole Venue (400 cap)"}>Whole Venue (400 cap)</option>
                  <option  value={"Upstairs (200 cap)"}>Upstairs (200 cap)</option>
                  <option  value={"Downstairs (200 cap)"}>Downstairs (200 cap)</option>
             </select>
        </div>
        {formik.touched.Venue && formik.errors.Venue ? (
          <div style={{ color: "#F1EDEA"}} className="error">
            {formik.errors.Venue}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="functionType">
          Function Type
            <FunctionsImportantStar />
          </label>
          <input
            id="functionType"
            type="text"
            name="functionType"
            className={formik.touched.functionType &&formik.errors.functionType ? styles.error : styles.email}
            {...formik.getFieldProps("functionType")}
          />
        </div>
        {formik.touched.functionType && formik.errors.functionType ? (
          <div style={{color: "#F1EDEA" }} className="error">
            {formik.errors.functionType}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="numberOfGuests">
          Number Of Guests
            <FunctionsImportantStar />
          </label>
          <input
            id="numberOfGuests"
            type="number"
            name="numberOfGuests"
            className={formik.touched.numberOfGuests &&formik.errors.numberOfGuests ? styles.error : styles.email}
            {...formik.getFieldProps("numberOfGuests")}
          />
        </div>
        {formik.touched.numberOfGuests && formik.errors.numberOfGuests ? (
          <div style={{color: "#F1EDEA" }} className="error">
            {formik.errors.numberOfGuests}
          </div>
        ) : null}
         </Grid>

         <Grid item xs={12} sm={6} md={6}>
         <div className={styles.inputContainer}>
          <label className={styles.bigLable} htmlFor="datePreference">
          Date Preference
            <FunctionsImportantStar />
          </label>
          <input
            id="datePreference"
            type="date"
            name="datePreference"
            className={formik.touched.datePreference &&formik.errors.datePreference ? styles.error : styles.email}
            {...formik.getFieldProps("datePreference")}
          />
        </div>
        {formik.touched.datePreference && formik.errors.datePreference ? (
          <div style={{color: "#F1EDEA" }} className="error">
            {formik.errors.datePreference}
          </div>
        ) : null}
         </Grid>
         <Grid item xs={12} sm={12} md={12}>
          <p className={styles.bigLable}>
          Event Times
            <FunctionsImportantStar />
          </p>  </Grid>
       
         <Grid item xs={12} sm={6} md={6}>
          <div className={styles.inputContainer}>
          
          <label  htmlFor="startTime">
          START
            <FunctionsImportantStar />
          </label>
          <input
          style={{position:"relative"}}
            id="startTime"
            type="time"
            name="startTime"
            className={formik.touched.startTime &&formik.errors.startTime ? styles.error : styles.email}
            {...formik.getFieldProps("startTime")}
          />
            
        </div>
        {formik.touched.startTime && formik.errors.startTime ? (
          <div style={{color: "#F1EDEA" }} className="error">
            {formik.errors.startTime}
          </div>
        ) : null}</Grid>

         <Grid item xs={12} sm={6} md={6}><div className={styles.inputContainer}>
          <label style={{margingTop:"1%"}}  htmlFor="startTime">
          FINISH
            <FunctionsImportantStar />
          </label>
          <input
            id="finishTime"
            type="time"
            name="finishTime"
            className={formik.touched.finishTime &&formik.errors.finishTime ? styles.error : styles.email}
            {...formik.getFieldProps("finishTime")}
          />
            
        </div>
        {formik.touched.finishTime && formik.errors.finishTime ? (
          <div style={{ color: "#F1EDEA" }} className="error">
            {formik.errors.finishTime}
          </div>
        ) : null}</Grid>

        </Grid>

        <div className={styles.inputContainer}>
          <label className={styles.bigLable} style={{marginTop:"3%"}} htmlFor="approximateBudget">
          Approximate Budget
            <FunctionsImportantStar />
          </label>
          <input
            id="approximateBudget"
            type="number"
            name="approximateBudget"
            className={formik.touched.approximateBudget &&formik.errors.approximateBudget ? styles.error : styles.email}
            {...formik.getFieldProps("approximateBudget")}
          />
        </div>
        {formik.touched.approximateBudget && formik.errors.approximateBudget ? (
          <div style={{ color: "#F1EDEA"}} className="error">
            {formik.errors.approximateBudget}
          </div>
        ) : null}

        <div className={styles.secondInputContainer}>
          <label htmlFor="message" style={{marginTop:"3%"}}> Message, Comments, Questions</label>
          <FunctionsImportantStar />
          <textarea
            id="message"
            name="message"
            style={{ width: "100%" }}
            rows="7"
            className={formik.touched.message &&formik.errors.message ? styles.commentsError : styles.comments}

            {...formik.getFieldProps("message")}
          ></textarea>
        </div>
        {formik.touched.message && formik.errors.message ? (
          <div style={{ color: "#F1EDEA" }} className="error">
            {formik.errors.message}
          </div>
        ) : null}
           <div>

           </div>

        {/* submition button */}
        <div className="parent">
          <ButtonBase className={styles.supmitButton} type="submit">
            SUBMIT
          </ButtonBase>
          {failed && <p>There was a problem with your submission. Please fill out the missing the fields.</p>}
        </div>
      </form>
    </Box>
  );
};
export default FunctionForm;
