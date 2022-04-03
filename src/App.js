import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import routes from "./routes";
const loading = <div>loading...</div>;
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={loading}>
        <Routes>
          {/* <Route path="/" exact="true" element={<Home />} /> */}
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            );
          })}
          {/* localhost:3000/home/이런형식 모두 => <Home/>컴포넌트로 연결해준다. 
          ex) 주소창에 localhost:3000/home/asdfasdf =><Home/>으로
          */}
          <Route path="home/*" element={<Home />} />
          {/* localhost:3000/ <-이 url뒤에, 위에 Route path와 일치하는 형식
          이 없으면 <>Not Found</>를 표시함.

          ex) localhost:3000/asdf  <- 화면에 Not Found가 나타남.
          */}
          {/* localhost:3000/home/이런형식 모두 => <Home/>컴포넌트로 연결해준다. */}
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
