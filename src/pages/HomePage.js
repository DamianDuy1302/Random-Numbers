import { Breadcrumb, Button, Col, Form, Input, Layout, Menu, Row } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import FormItem from "antd/es/form/FormItem"
import { randomNumber } from "../helpers/functions/randomNumbers"
import { quantityAction } from "../actions/quantityAction"
import { useEffect, useState } from "react"
const HomePage = () => {
    const handleSubmit = (e) => {
        const arr = randomNumber(parseInt(e.quantity), parseInt(e.min), parseInt(e.max));
        const random_numbers = document.querySelector(".random-numbers")
        random_numbers.innerHTML = ""
        console.log(random_numbers)
        arr.forEach(item => {
            const span = document.createElement("span")
            span.className = "random-number"
            span.innerHTML = `${item}`
            random_numbers.appendChild(span)
        })
    }

    return (
        <>
            <div className="form">
                <Form onFinish={handleSubmit}>
                    <Row gutter={8}>
                        <Col span={6}>
                            <FormItem label={"Quantity"} name={"quantity"} initialValue={100}>
                                <Input defaultValue={100} />
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem  label={"Min"} name={"min"} initialValue={0}>
                                <Input defaultValue={0} />
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem label={"Max"} name={"max"} initialValue={10000}>
                                <Input defaultValue={10000} />
                            </FormItem>
                        </Col>
                        <FormItem>
                            <Button htmlType="submit" type="primary" className="ml-15">Random</Button>
                        </FormItem>
                    </Row>

                </Form>
            </div>

            <div className="random-numbers">

            </div>
        </>
    )
}
export default HomePage