import { lazy, Suspense } from 'react'
import { Button } from 'antd'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './WordCloudComponent.scss'

const WordCloudComponent = () => {
  const LazyWordCloud = lazy(() => import('../WordCloud/WordCloud'))

  const loadingIcon = <LoadingOutlined />

  return (
    <div className='word-cloud-component'>
      <h1 id='word-cloud-title'> Skill Set</h1>
      <Suspense
        fallback={<Spin indicator={loadingIcon} />}
        id='lazy-word-cloud'
      >
        <LazyWordCloud />
      </Suspense>
      <HashLink
        smooth
        to={'/#contact'}
        scroll={(el) =>
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      >
        <Button type='text' size='large' id='next-btn'>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </HashLink>
    </div>
  )
}
export default WordCloudComponent
