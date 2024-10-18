// src/components/atoms/Icon.tsx
import React from 'react';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrowRight.svg';

export const Lock = () => {
    return <LockIcon width={16} height={20} className='icon-default' />;
};

export const ArrowRight = () => {
    return <ArrowRightIcon width={16} height={20}/>;
};