import { Breadcrumb, Button, Col, Form, Input, Layout, Menu, Row, Switch } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import FormItem from "antd/es/form/FormItem"
import { randomNumber } from "../helpers/functions/randomNumbers"
import { useEffect, useState } from "react"
import { searchMode } from "../actions/searchMode"
import { randomNumbersFromArray } from "../helpers/functions/randomNumberFromArray"
const HomePage = () => {
    const random_numbers = document.getElementById("random-numbers")
    console.log(random_numbers)
    const dispatch = useDispatch()
    const searchStatus = useSelector(state => state.searchStatus)
    console.log(searchStatus)
    const handleSubmit = (e) => {
        const arr = randomNumber(parseInt(e.quantity), parseInt(e.min), parseInt(e.max));
        if(random_numbers)
        {
            random_numbers.innerHTML = ""
        }
        
        // console.log(random_numbers)
        arr.forEach(item => {
            const span = document.createElement("span")
            span.className = "random-number"
            span.innerHTML = `${item}`
            random_numbers.appendChild(span)
        })
    }
    const handleSubmit2 = (e) => {
        console.log(e)
        if(random_numbers)
        {
            random_numbers.innerHTML = ""
        }
        const arr2 = randomNumbersFromArray(parseInt(e.quantity), e.input)
        console.log(arr2)
        arr2.forEach(item => {
            const span = document.createElement("span")
            span.className = "random-number"
            span.innerHTML = `${item}`
            random_numbers.appendChild(span)
        })
    }
    const onChange = (e) => {
        console.log(e)
        dispatch(searchMode(e))
        if(random_numbers)
        {
            random_numbers.innerHTML = ""
        }
    }

    return (
        <>

            <div className="form">
                <Switch className="switch" defaultChecked onChange={onChange} />

                {searchStatus == true ? (
                    <>
                        <Form onFinish={handleSubmit}>

                            <Row gutter={8}>
                                <Col span={6}>
                                    <FormItem label={"Quantity"} name={"quantity"} initialValue={100}>
                                        <Input defaultValue={100} />
                                    </FormItem>
                                </Col>

                                <Col span={6}>
                                    <FormItem label={"Min"} name={"min"} initialValue={0}>
                                        <Input defaultValue={0} />
                                    </FormItem>
                                </Col>
                                <Col span={6}>
                                    <FormItem label={"Max"} name={"max"} initialValue={10000}>
                                        <Input defaultValue={10000} />
                                    </FormItem>
                                </Col>
                                <FormItem>
                                    <Button htmlType="submit" type="primary" className="ml-15 random-button">Random</Button>
                                </FormItem>
                            </Row>
                        </Form>
                    </>

                ) : (
                    <>
                        <Form onFinish={handleSubmit2}>
                            <Row gutter={8}>
                                <Col span={6}>
                                    <FormItem label={"Quantity"} name={"quantity"} initialValue={100}>
                                        <Input defaultValue={100} />
                                    </FormItem>
                                </Col>

                                <Col span={12}>
                                    <FormItem label={"Input"} name={"input"}>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <FormItem>
                                    <Button htmlType="submit" type="primary" className="ml-15 random-button">Random</Button>
                                </FormItem>
                            </Row>
                        </Form>

                    </>
                )

                }
            
            <div id="random-numbers">

            </div>
        </div >




        </>
    )
}
export default HomePage