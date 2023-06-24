import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageSection from "./PageSection";

const ReadMoreSection = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Получение переданных данных из location.state.data
    const postData = location.state?.data;

    if (postData) {
      setData(postData);
    } else {
      // Если данных нет, выполните другую логику, например, загрузите их из API
      async function fetchPost() {
        try {
          const response = await fetch(`http://localhost:3001/sectionData/${id}`);
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData);
        } catch (error) {
          alert('Ошибка при получении данных!');
        }
      }
      fetchPost();
    }
  }, [id, location]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="titlePage">
      <PageSection
        id={id}
        title={data.title}
        img={data.img}
        text={data.text}
      />
    </div>
  );
};

export default ReadMoreSection;
