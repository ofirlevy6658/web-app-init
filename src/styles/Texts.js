import styled from 'styled-components'
import Colors from './Colors'

const Text = styled.div`
    cursor: default;
`
const Header = styled(Text)`
    font-size: 48px;
    font-weight: 700;
`
const Description = styled(Text)`
    font-size: 18px;
    color: ${Colors.DARK_GREY};
    text-transform: capitalize;
`
const Texts = {
    Header,
    Description,
}

export default Texts
