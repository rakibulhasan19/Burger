import React, { Component } from 'react';
// import axios from 'axios'
import Modal from '../../components/UI/Modal/Modal'
import Hoc from '../Hoc'
const withErrorHandler = (WrapperComponent,axios)=>{
    return class extends Component{
        state={
            error:null,
        }
        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
            this.resInterceptors=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }
        errorConfirmHandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Hoc>
                    <Modal 
                        clicked={this.errorConfirmHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Hoc>
            )
        }
    }
}
export default withErrorHandler;