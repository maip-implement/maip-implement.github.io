import React from "react";

// component
import Table from "./components/Table";

// data
import {
  stackLearner,
  webProgramming,
  freelanceCourse,
  simplilearnCourse,
  bohubrihiCourses,
  english,
  cseBookList,
  importantDocs,
  extra,
} from "./data";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>MAIPE Drive</h1>
      <Table tableTitle="Stack Learner Bootcamp" data={stackLearner} />
      <Table tableTitle="Web Programming" data={webProgramming} />
      <Table tableTitle="Freelance Course" data={freelanceCourse} />
      <Table tableTitle="Simplilearn Course Curriculum" data={simplilearnCourse} />
      <Table tableTitle="Bohubrihi Courses" data={bohubrihiCourses} />
      <Table tableTitle="English" data={english} />
      <Table tableTitle="CSE Book List" data={cseBookList} />
      <Table tableTitle="Important Docs" data={importantDocs} />
      <Table tableTitle="Extra" data={extra} />
    </>
  );
};

export default App;
