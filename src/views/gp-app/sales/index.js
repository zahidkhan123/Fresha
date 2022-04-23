import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import Sales from '@src/views/gp-app/sales/Sales2'
import AvgSessions from '@src/views/gp-app/sales/AvgSessions'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const Sale = () => {
    const { colors } = useContext(ThemeColors)

    return (
        <Row>
            <Col xs='8'>
                <Sales primary={colors.primary.main}/> 
            </Col>

            <Col lg='6' xs='12'>
                <AvgSessions primary={colors.primary.main} />
            </Col>
        </Row>
    )
}

export default Sale
