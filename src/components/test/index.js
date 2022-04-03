import {TEST, TEST2} from "../../redux/actions/test.actions.types";
import {connect} from "react-redux";
import {testDataSelector} from "../../redux/selectors/test.selector";
import {useState} from "react";
import {LOGIN} from "../../redux/actions/user.actions.types";

function Test({data, login, testFunc2}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEvent = (setter) => (e) => setter(e.currentTarget.value);
    const submitEvent = () => login(email, password);

    return <div>
        {data}
        <input type={"text"} value={email} onChange={changeEvent(setEmail)}/>
        <input type={"text"} value={password} onChange={changeEvent(setPassword)}/>
        <button onClick={submitEvent}>Test</button>
        <button onClick={testFunc2}>Test2</button>
    </div>
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: testDataSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (email, password) => dispatch({type: LOGIN, data: {email, password}}),
        testFunc2: () => dispatch({type: TEST2})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test)