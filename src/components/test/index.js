import {TEST, TEST2} from "../../redux/actions/test.actions.types";
import {connect} from "react-redux";
import {testDataSelector} from "../../redux/selectors/test.selector";
import {useState} from "react";

function Test({data, testFunc, testFunc2}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEvent = (setter) => (e) => setter(e.currentTarget.value);
    const submitEvent = () => testFunc(email, password);

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
        testFunc: (email, password) => dispatch({type: TEST, data: {email, password}}),
        testFunc2: () => dispatch({type: TEST2})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test)