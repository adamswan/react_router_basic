import { useSearchParams, useParams } from "react-router-dom";

function Article() {
  // 获取 SearchParams 传的参数
  let [paramsOfSearchParams] = useSearchParams();
  let theName = paramsOfSearchParams.get("name");

  // 获取 Params 传的参数
  let paramsOfParams = useParams();
  let theId = paramsOfParams.id;

  return (
    <div>
      <h1>Article</h1>
      <div>searchParams传参的参数:{theName}</div>
      <div>params传参的参数:{theId}</div>
    </div>
  );
}

export default Article;
