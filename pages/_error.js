import PropTypes from 'prop-types'
import {appWithTranslation, withTranslation} from '../i18n'

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')}
  </p>
)

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ({ statusCode } = res)
  } else if (err) {
    ({ statusCode } = err)
  }
  return {
    namespacesRequired: ['general'],
    statusCode,
  }
}

Error.defaultProps = {
  statusCode: null,
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
}

export default appWithTranslation(withTranslation('general')(Error))