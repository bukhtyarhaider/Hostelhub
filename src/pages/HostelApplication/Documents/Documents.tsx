import React from "react";
import styles from "./Documents.module.scss";
import { uploadIcon } from "../../../assets";

interface DocumentsProps {
  formData: any;
  setFormData: (data: any) => void;
  errors: any;
}

const UploadSection: React.FC<{
  data: any;
  formData: any;
  setFormData: (data: any) => void;
  errors: any;
}> = ({ data, formData, setFormData, errors }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  return (
    <div className={styles.uploadSection}>
      <label className={styles.label}>
        {data.label} {data.required && <span>*</span>}
      </label>
      <div className={styles.uploadBox}>
        <input
          type="file"
          id={data.name}
          name={data.name}
          accept=".pdf"
          onChange={handleFileChange}
        />
        <label htmlFor={data.name}>
          <img src={uploadIcon} alt="upload" />
          <div className={styles.uploadPrompt}>
            Drag / Drop your image here or <span>choose file</span>
          </div>
          <div className={styles.uploadNote}>
            Only pdfs below 25 mbs are allowed *
          </div>
        </label>
        {errors[data.name] && (
          <div className={styles.error}>{errors[data.name]}</div>
        )}
      </div>
    </div>
  );
};

const documentsData = [
  {
    label: "CNIC Front Side",
    required: true,
    name: "cnicFront",
  },
  {
    label: "CNIC Back Side",
    required: true,
    name: "cnicBack",
  },
  {
    label: "Student ID (Optional)",
    required: false,
    name: "studentId",
  },
];

const Documents: React.FC<DocumentsProps> = ({
  formData,
  setFormData,
  errors,
}) => {
  return (
    <div className={styles.documentsContainer}>
      <h2 className={styles.heading}>Documents</h2>

      <form className={styles.form}>
        {documentsData.map((data) => (
          <UploadSection
            data={data}
            key={data.label}
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        ))}
      </form>
    </div>
  );
};

export default Documents;
