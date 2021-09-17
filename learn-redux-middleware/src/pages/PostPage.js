import PostContainer from "../containers/PostContainer";

const PostPage = ({ match }) => {
  const { id } = match.params; // URL 파라미터 조회

  // URL 파라미터 값은 문자열 이므로, parseInt를 사용해 숫자로 변환해주자.
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
