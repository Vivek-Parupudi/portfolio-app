import React from 'react';


function ProjectCard() {
    return (
        <>
        <div className="card">
            <div className="image">
                <img></img>
            </div>
            <div className="content">
                <div className="header">
                    Stance detection on Twitter
                </div>
                <div className="description">
                    <p>A neural network model to identify the stances of a set of tweets on a set of labels and classifying them accordingly</p>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">
                    <a href='https://github.com/Vivek-Parupudi/StanceDetection-Twitter' target='blank'>Code</a>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img></img>
            </div>
            <div className="content">
                <div className="header">
                    Performance analysis of optimization algorithms
            </div>
                <div className="description">
                    <p>A performance analysis of different first-order optimization algortihms in a CNN</p>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">
                    <a href='https://github.com/Vivek-Parupudi/CS6301_Project_OptML' target='blank'>Code</a>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img></img>
            </div>
            <div className="content">
                <div className="header">
                    Spotify automation
            </div>
                <div className="description">
                    <p>Automating Spotify to make a playlist of liked songs on Youtube</p>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">
                    <a href='https://github.com/Vivek-Parupudi/SpotifyGeneratePlaylist' target='blank'>Code</a>
                </button>
            </div>
        </div>
    </>
  );
}

export default ProjectCard;