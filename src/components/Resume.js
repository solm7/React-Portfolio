import myResume from '../files/Solomon_Dorsey_Resume_Original.docx';
function Resume() {
  return (
    <div>
      <h1> Resume</h1>
      <iframe
        src={myResume}
        title="Solomon Dorsey Resume"
        width="500"
        height="700"
      ></iframe>
    </div>
  );
}
export default Resume;
