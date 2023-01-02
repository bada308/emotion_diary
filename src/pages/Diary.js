import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;

/**
 * 특징 : 어떤 일기를 보여줘야 할 지 전달 받아야 함
 * Path Variable 사용 (useParams) or Query 사용
 *
 */
