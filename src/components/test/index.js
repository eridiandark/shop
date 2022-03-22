import {TEST} from "../../redux/actions/test.actions.types";
import {connect} from "react-redux";
import {testDataSelector} from "../../redux/selectors/test.selector";

function Test({data, testFunc}){
    return <div>
        {data}
        <button onClick={testFunc}>Test</button>
    </div>
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: testDataSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testFunc: ()=>dispatch({type: TEST})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test)