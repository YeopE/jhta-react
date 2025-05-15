import Button from "./components/Button"
import Book from "./components/Book"
import Profile from "./components/Profile"
import BookList from "./components/BookList"
import Counter from "./components/Counter"
import CountButton from "./components/CountButton"
import Light from "./components/Light"
import ProfileList from "./components/ProfileList"
import ImgBtn from "./components/ImgBtn"

function App() {
  return (
    <>
      <h1>App..........</h1>
      <img src="/1.png"/>
      <Button text="BUTTON1"/>
      <Button text="BUTTON2"/>
      <Book title="리액트" price="10000" author="최씨" publisher="중앙"></Book>
      <Book title="스프링" price="20000" author="김씨" publisher="중앙"></Book>
      <div style={{display:'flex',gap:'5px'}}>
        <Profile img="/1.png" name="홍길동" phone="010-1234-5678"></Profile>
        <Profile img="/2.png" name="이길동" phone="010-1234-5678"></Profile>
      </div>
      <BookList></BookList>
      <Counter></Counter>
      <CountButton></CountButton>
      <Light></Light>
      <ProfileList></ProfileList>
      <ImgBtn></ImgBtn>
    </>
  )
}

export default App
