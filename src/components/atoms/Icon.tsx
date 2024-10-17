// src/components/atoms/Icon.tsx
import React from 'react';
import { ReactComponent as MyIcon } from '../../assets/icons/lock.svg';

export const Icon = () => {
    return <MyIcon width={16} height={20} className='icon-default' />;
};