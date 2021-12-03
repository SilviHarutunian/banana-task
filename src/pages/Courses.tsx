import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../redux/action";
import type { RootStateType, Course } from "../redux/reducer";

export default function Courses() {
  const { selectedCategory, categories, courses } = useSelector(
    (state: RootStateType) => state
  );

  const dispatch = useDispatch();

  const handleClickCategory = (category: string) => {
    dispatch(changeCategory(category));
  };

  const getCourses = (selectedCategory: string): Course[] => {
    if (selectedCategory === "popular") {
      return [...courses].sort((a, b) => (a.popular > b.popular ? -1 : 1));
    }

    if (selectedCategory === "favorite") {
      return courses.filter((course) => course.favorite === true);
    }

    if (selectedCategory === "new") {
      return [...courses].sort((a, b) =>
        a.createDate > b.createDate ? -1 : 1
      );
    }

    return sortedCourses;
  };

  const sortedCourses = getCourses(selectedCategory);

  return (
    <section className="page-section">
      <div className="main">
        <div className="main-header">
          <h1>Courses</h1>
        </div>
        <div className="header-categories">
          <ul>
            {categories.map((category) => {
              return (
                <li
                  key={category.value}
                  onClick={() => handleClickCategory(category.value)}
                  className={
                    selectedCategory === category.value ? "active-category" : ""
                  }
                >
                  {category.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="image-content"> */}
      <div className="images-section">
        {sortedCourses.map((course) => {
          return (
            <div className="image-container">
              <img
                key={course.id}
                src={course.url}
                alt={"fruit"}
                className="selected-images"
              />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
}
