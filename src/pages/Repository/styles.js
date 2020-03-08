import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const Browser = styled(WebView)`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 'large',
})`
  justify-content: center;
  align-items: center;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
