import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import BasicInput from './basic-input';
import Moment from 'moment';
let dateFormat = 'MM/DD/YYYY HH:mm:ss';

function RegisterPage(props) {

    return (
        <form
            className="user-edit"
            name="useredit"
            onSubmit={function (e) { e.preventDefault(); }}
            noValidate>
            <fieldset>
                <legend>become an author</legend>

                <BasicInput
                    type="text"
                    name="blogName"
                    placeholder="blog name"
                    autoFocus />
                <BasicInput
                    type="text"
                    name="username"
                    placeholder="username"
                    minLength="3"
                />
                <BasicInput
                    type="password"
                    name="password"
                    minLength="6"
                    placeholder="password"
                    required />
                <br />

                {/* <div className="profile-image-container">
                    <label>profile image</label>
                    <img className="profile-img" src={this.state.profileImageData} />
                    <BasicInput name="profileImage" type="file" ref="profileImage" onChange={this.userImageUpload} helptext={this.state.sizeExceeded ? 'less than 1MB' : ''}>
                        <button onClick={this.chooseFile}>choose file</button>
                    </BasicInput>
                </div> */}

                <BasicInput type="text" name="firstName" placeholder="first name" />
                <BasicInput type="text" name="lastName" placeholder="last name" />
                <BasicInput type="email" name="email" placeholder="email" />

                <button type="submit">I'm ready to write</button>
            </fieldset>
        </form>
    )
}

export default RegisterPage;