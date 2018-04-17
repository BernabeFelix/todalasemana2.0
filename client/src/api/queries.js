import { gql } from 'apollo-boost/lib/index';

export const promotionById = gql`
  query promotion($id: Int!) {
    promotion(id: $id) {
      title
      imgUrl
      isActive
      description
    }
  }
`;
