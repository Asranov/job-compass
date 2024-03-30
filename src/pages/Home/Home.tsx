import React from "react";
import "./Home.css";
import Header from "../../layouts/Header";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { users } from "../../db/users";
import { posts } from "../../db/posts";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main__container">
        <div className="posts__wrapper">
          {posts.map((post) => {
            return (
              <div key={post.id} className="post">
                <div className="post__owner">
                  <div className="post__owner-details">
                    <FaRegUserCircle className="user-icon" />
                    <div>
                      <p className="post__owner-name">{post.owner.name}</p>
                      <p className="post__owner-profession">
                        {post.owner.profession}
                      </p>
                    </div>
                  </div>
                  <MdMoreVert className="more-icon"/>
                </div>
                <div className="post__info">
                  <h3 className="post__info-title">{post.title}</h3>
                  <p className="post__info-description">{post.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="follow__card">
          <h3>Following</h3>
          {users.map((user) => {
            return (
              <div key={user.id} className="follow__card-users">
                <div className="user__details">
                  <FaRegUserCircle className="user-icon" />
                  <div>
                    <p className="user__details-name">{user.name}</p>
                    <p className="user__details-profession">
                      {user.profession}
                    </p>
                  </div>
                </div>
                <FaPlus className="plus-icon" />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
