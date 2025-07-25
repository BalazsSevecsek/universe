import { memo, ReactNode, useState } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';

import { useUIStore } from '@app/store/useUIStore.ts';
import { setShowTapplet, setSidebarOpen } from '@app/store/actions/uiStoreActions';

import { HoverIconWrapper, NavIconWrapper, NavigationWrapper, StyledIconButton } from './SidebarMini.styles.ts';
import { AnimatePresence } from 'motion/react';

import { BridgeOutlineSVG } from '@app/assets/icons/bridge-outline.tsx';
import { useTappletsStore } from '@app/store/useTappletsStore.ts';
import { BRIDGE_TAPPLET_ID } from '@app/store/consts.ts';

import { useWalletStore } from '@app/store';

interface NavButtonProps {
    children: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const NavButton = memo(function NavButton({ children, isActive, onClick }: NavButtonProps) {
    const sidebarOpen = useUIStore((s) => s.sidebarOpen);
    const [showArrow, setShowArrow] = useState(false);
    const isWalletScanning = useWalletStore((s) => s.wallet_scanning?.is_scanning);

    const scaleX = sidebarOpen ? -1 : 1;

    return (
        <StyledIconButton
            onClick={onClick}
            active={isActive}
            aria-pressed={isActive}
            aria-label={isActive ? 'Active sidebar section' : 'Inactive sidebar section'}
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
            disabled={isWalletScanning}
        >
            <AnimatePresence mode="popLayout">
                {showArrow ? (
                    <HoverIconWrapper
                        initial={{ opacity: 0, scaleX }}
                        exit={{ opacity: 0, scaleX }}
                        animate={{ opacity: 1, scaleX }}
                    >
                        <IoChevronForwardOutline size={28} />
                    </HoverIconWrapper>
                ) : (
                    <NavIconWrapper initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {children}
                    </NavIconWrapper>
                )}
            </AnimatePresence>
        </StyledIconButton>
    );
});
const BridgeNavigationButton = memo(function BridgeNavigationButton() {
    const showTapplet = useUIStore((s) => s.showTapplet);
    const setActiveTappById = useTappletsStore((s) => s.setActiveTappById);

    function handleToggleOpen() {
        if (!showTapplet) {
            setActiveTappById(BRIDGE_TAPPLET_ID, true);
            setShowTapplet(true);
            setSidebarOpen(false);
        } else {
            setShowTapplet(false);
            setSidebarOpen(true);
        }
    }

    return (
        <NavigationWrapper>
            <NavButton onClick={handleToggleOpen} isActive>
                <BridgeOutlineSVG />
            </NavButton>
        </NavigationWrapper>
    );
});

export default BridgeNavigationButton;
