import React from "react";

const ModalDialog = props => {

    //Retrieving all the dynamic data from our html fetched page.
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {/*Here is our content loaded from the html fetched page*/}
                <div>
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                </div>

            </div>
        </div>
    );
};

export default ModalDialog;