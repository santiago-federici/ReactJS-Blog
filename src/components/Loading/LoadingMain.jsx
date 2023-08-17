import { LoadingArticle } from "./LoadingArticle";
import { LoadingTopics } from "./LoadingTopics";
import { LoadingWriters } from "./LoadingWriters";

import './LoadingMain.css'

export function LoadingMain() {

    return(
        <main className="loading-main loading-main--flow">

            <div className="loading-searchbox shining"></div>

            <div className="loading-foryou shining"></div>

            <div className="loading-articles-container">
                <LoadingArticle />
                <LoadingArticle />
                <LoadingArticle />
            </div>
        
            <div className="loading-trending-container">
                <LoadingWriters />

                <LoadingTopics />
            </div>
        </main>
    )
}