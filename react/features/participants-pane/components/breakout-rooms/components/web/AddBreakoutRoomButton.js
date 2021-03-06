// @flow

import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { createBreakoutRoom } from '../../../../../breakout-rooms/actions';
import ParticipantPaneBaseButton from '../../../web/ParticipantPaneBaseButton';

const useStyles = makeStyles(() => {
    return {
        button: {
            width: '100%'
        }
    };
});

export const AddBreakoutRoomButton = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyles();

    const onAdd = useCallback(() =>
        dispatch(createBreakoutRoom())
    , [ dispatch ]);

    return (
        <ParticipantPaneBaseButton
            accessibilityLabel = { t('breakoutRooms.actions.add') }
            className = { styles.button }
            onClick = { onAdd }>
            {t('breakoutRooms.actions.add')}
        </ParticipantPaneBaseButton>
    );
};
