import Resume from "./resume";

const Resumes = ({ resumes }) => {
  const preparedResumes = resumes.map((resume) => <Resume resume={resume} />);

  return preparedResumes;
};

export default Resumes;
