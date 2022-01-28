import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import GenresIndDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop (){
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

                {/*<!-- Content Row Movies-->*/}
				<div className="row">
                    <ContentRowMovies/>
				
				    {/*<!-- Content Row Last Movie in Data Base -->*/}
				    <div className="row">
					    <LastMovieInDb/>
                        <GenresIndDb/>
                    </div>

			    </div>
            </div>
			{/*<!--End Content Row Top-->*/}
        </React.Fragment>
    )
}

export default ContentRowTop;