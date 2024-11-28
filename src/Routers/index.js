import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import AdminLogin from "../Screens/Auth/Login";
import AdminSignup from "../Screens/Auth/signup";
import { Completion } from "../Screens/Completion/index";
import { Library } from "../Screens/library/index";
import { Waitinglist } from "../Screens/waitinglist";
import { History } from "../Screens/history";
import { Shop } from "../Screens/shop";
import { EditChapter } from "../Screens/EditChapter";
import Error from "../Screens/Error";
import { Help } from "../Screens/Help";
import { Mission } from "../Screens/Mission";
import { ProductListing } from "../Screens/ProductListing";
import { Novel } from "../Screens/Novel";
import { ProductDetail } from "../Screens/BookDetail/BookDetail.js";
import { ProductDetails } from "../Screens/ProductListing/ProductDetails";
import { CreateRequest } from "../Screens/CreateRequest/index.js";
import { TranslationRequest } from "../Screens/TranslationRequest/index.js";
import { TranslationRequestDetail } from "../Screens/TranslationRequestDetail/index.js";
import { MyAccount } from "../Screens/MyAccount";
import { ChapterPage } from "../Screens/ChapterPage";
import { Ranking } from "../Screens/Ranking";
import { BookNameManga } from "../Screens/BookNameManga";
import { CreateChapterManga } from "../Screens/CreateChapterManga";
import { Edit } from "../Screens/Edit";
import { AuthorInfo } from "../Screens/AuthorInfo";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Beta } from "../Screens/Home/Beta";
import { AuthorModule } from "../Screens/AuthorModule";
import { Blogs } from "../Screens/Blogs";
import { BookListing } from "../Screens/BookListing";
import { BookName } from "../Screens/BookName";
import { BookChapterDetail } from "../Screens/BookChapterDetail";
import { AboutAuthor } from "../Screens/AboutAuthor";
import { Profile } from "../Screens/Profile";
import { SearchFilter } from "../Screens/SearchFilter/index";
import { Forum } from "../Screens/Forum";
import {Discussion } from "../Screens/Discussion/index.js";
import { WhispersInVerse } from "../Screens/WhispersInVerse/index.js";
import { WhispersInVerseManga } from "../Screens/WhisperInVerseManga";
import { ChapterTitle } from "../Screens/ChapterTitle";
import { CreateChapter } from "../Screens/CreateChapter/index.js";
import { Author } from "../Screens/Author/index.js";
export default function UserRouter() {
  return (
    <BrowserRouter basename="/TimUser">
      <Routes>
       <Route path="/" element={<Beta />}></Route>
       <Route path="/" element={<Beta />}></Route>
       <Route path="/author-listings" element={<AuthorModule />}></Route>
       <Route path="/book-listing" element={<BookListing />}></Route>
       <Route path="/chapter-page" element={<ChapterPage />}></Route>
       <Route path="/whispers-in-verse" element={<WhispersInVerse />}></Route>
       <Route path="/edit-chapter" element={<EditChapter />}></Route>
       <Route path="/author" element={<Author />}></Route>
       <Route path="/book-name-manga" element={<BookNameManga />}></Route>
       <Route path="/library" element={<Library />}></Route>
       <Route path="/waiting-list" element={<Waitinglist />}></Route>
       <Route path="/Help" element={<Help/>}></Route>
       <Route path="/History" element={<History />}></Route>
       <Route path="/shop" element={<Shop />}></Route>
       <Route path="/translation-request" element={<TranslationRequest />}></Route>
       <Route path="/translation-request-detail" element={<TranslationRequestDetail />}></Route>
       <Route path="/create-chapter" element={<CreateChapter />}></Route>
       <Route path="/forget-password" element={<ForgetPassword />} />
       <Route path="/forget-password2" element={<ForgetPassword2 />} />
       <Route path="/forget-password3" element={<ForgetPassword3 />} />
       <Route path="/create-request" element={<CreateRequest />}></Route>
       <Route path="/discussion" element={<Discussion />}></Route>
       <Route path="/whispers-in-verse-manga" element={<WhispersInVerseManga />}></Route>
       <Route path="/chapter-title" element={<ChapterTitle />}></Route>
       <Route path="/book-listing" element={<ProductListing />}></Route>
       <Route path="/novel-listing" element={<Novel />}></Route>
       <Route path="/book-name" element={<BookName />}></Route>
       <Route path="/book-chapter-detail" element={<BookChapterDetail />}></Route>
       <Route path="/Forum" element={<Forum />}></Route>
       <Route path="/about-author" element={<AboutAuthor />}></Route>
       <Route path="/Profile" element={<Profile />}></Route>
       <Route path="/search-filter" element={<SearchFilter />}></Route>
       <Route path="/edit" element={<Edit />}> </Route>
       <Route path="/competition" element={<Completion />}></Route>
       <Route path="/mission" element={<Mission />}></Route>
       <Route path="/Blogs" element={<Blogs />}></Route>
       <Route path="/Ranking" element={<Ranking />}></Route>
       <Route path="/create-chapter-manga" element={<CreateChapterManga />}></Route>
       <Route path="/author-info" element={<AuthorInfo />}></Route>
        <Route
          path="/book-detail/:id"
          element={<ProductDetail />}
        > </Route>
        <Route
          path="/book-details/:id"
          element= {<ProductDetails />}
        > </Route>

        <Route path="*" element={<Error />} />
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/sign_up" element={<AdminSignup />}></Route>
        <Route
          path="/account"
          element={<ProtectedRoutes Components={MyAccount} />}
        > </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
