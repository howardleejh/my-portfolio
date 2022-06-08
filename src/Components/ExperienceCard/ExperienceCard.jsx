import { Card } from 'antd'
import './ExperienceCard.scss'

const ExperienceCard = (props) => {
  const { Meta } = Card
  return (
    <>
      <Card hoverable cover={<img alt={props.alt} src={props.source} />}>
        <Meta title={props.title} description={props.description} />
      </Card>
    </>
  )
}
export default ExperienceCard
