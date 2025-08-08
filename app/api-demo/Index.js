"use client";

// import node module libraries
import { Card, Container } from "react-bootstrap"

const Index = ({ data }) => {
    return (
        <Container>
            <Card className="p-5 my-3">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Card>
        </Container>
    )
}

export default Index