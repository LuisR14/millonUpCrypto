import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {dimension} from '../../themes/dimension';
const {horizontalScale, verticalScale} = dimension();

export const SkeletonLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item alignItems="center" marginTop={20}>
        <SkeletonPlaceholder.Item
          height={verticalScale(40)}
          borderRadius={8}
          width={horizontalScale(330)}
          paddingHorizontal={10}
          paddingVertical={5}
        />
        <SkeletonPlaceholder.Item marginTop={20}>
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
          <SkeletonPlaceholder.Item
            height={verticalScale(80)}
            borderRadius={10}
            width={horizontalScale(330)}
            padding={10}
            marginVertical={8}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
