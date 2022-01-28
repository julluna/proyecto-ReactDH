import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper () {
    return (
        <React.Fragment>

            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" class="d-flex flex-column">

                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar/>
                    <ContentRowTop/>
                </div>

                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default ContentWrapper;