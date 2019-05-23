import React, { Component } from 'react'
import FlipPage from 'react-flip-page';
import './Detail.css'
import axios from 'axios';
import {getfromstorage,setInStorage,} from '../../../../../../utils/Storage';
import ContentLoader from "react-content-loader"

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

export default class Detail extends Component {

    constructor(props) {
        super(props);
        const data = [];
        this.state = { data ,loading: true};

        this.flipPageSettings = {
          orientation: "horizontal",
          responsive: true,
          uncutPages: false,
          treshold: 1,
          pageBackground: "transparent",
          animationDuration: 400,
        };
      }

      async componentDidMount() {
        await axios.get('http://localhost:5000/get_all_question/Maths')
      .then(result=>{
        if(result.status==200){
          let questiondata='';
          questiondata = result.data;
          console.log(questiondata);
          this.setState({data:questiondata});
          this.setState({loading: false });
        }

      })
      .catch(err=>{
        console.log(err);
      });
      }




      render() {
        const screenHeight = window.innerHeight;

        const playerStyles = {
          height: screenHeight,
          minHeight: screenHeight,
          width: "100%",
          margin: "0 auto",
          touchAction: "none",

        };
        let question=this.state.data.data;
          console.log(question);

          if (this.state.loading) {
            return <div>
                  <ContentLoader
                    height={500}
                    width={1300}
                    speed={1}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                  >
                    <rect x="20" y="15" rx="20" ry="20" width="300" height="320" />
                    <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
                    <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
                    <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
                    <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
                    <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
                    <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
                    <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
                    <rect x="515" y="311" rx="8" ry="8" width="130" height="38" />
                  </ContentLoader>
              </div>;
          }

        return (
         <div className="App">
          <div className="comicbook" style={playerStyles}>
            <FlipPage {...this.flipPageSettings}>
              <article>
              {question.map((items, idx) => {
                  return(
                    <div key={idx}>
                      <img className="img" alt="" src={"http://localhost:5000/" + items.question_by.profileImage}/>
                    </div>
                   )
               })}
               {question.map((items, idx) => {
                   return(
                     <div key={idx}>
                       <img className="img" alt="" src={"http://localhost:5000/" + items.question_by.profileImage}/>
                     </div>
                    )
                })}
              </article>
              <article>
              {question.map((items, idx) => {
                  return(
                    <div key={idx}>
                      <img className="img" alt="" src={"http://localhost:5000/" + items.question_by.profileImage}/>
                    </div>
                   )
               })}
              </article>
              <article>
                <img className="img" alt="" src="https://cdn.dribbble.com/users/2667093/screenshots/6396533/03.jpg"/>
                <img className="img" alt="" src="https://cdn.dribbble.com/users/2667093/screenshots/6396531/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/23.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/24.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/25.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/26.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/27.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/28.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/29.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/30.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/31.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/32.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/chapters/Annual-1/33.jpg"/>
              </article>

              ))}
            </FlipPage>
          </div>
        </div>
        );
      }
}
