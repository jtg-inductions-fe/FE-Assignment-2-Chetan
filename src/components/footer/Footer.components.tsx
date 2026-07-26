import { Facebook, Instagram, Twitter } from '@mui/icons-material';

import {
    ColumnTitle,
    CopyrightBar,
    CopyrightText,
    FooterContainer,
    FooterGrid,
    FooterLinkItem,
    LinkColumn,
    SocialRow,
    StyledFooter,
} from './Footer.styles';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <FooterContainer maxWidth="xl">
                <FooterGrid>
                    <LinkColumn>
                        <ColumnTitle variant="subtitle2">Company</ColumnTitle>
                        <FooterLinkItem href="#">About Us</FooterLinkItem>
                        <FooterLinkItem href="#">Contact Us</FooterLinkItem>
                    </LinkColumn>

                    <LinkColumn>
                        <ColumnTitle variant="subtitle2">Legal</ColumnTitle>
                        <FooterLinkItem href="#">Terms & Conditions</FooterLinkItem>
                        <FooterLinkItem href="#">Privacy Policy</FooterLinkItem>
                    </LinkColumn>

                    <LinkColumn>
                        <ColumnTitle variant="subtitle2">Follow Us</ColumnTitle>
                        <SocialRow>
                            <FooterLinkItem href="#" aria-label="Facebook">
                                <Facebook fontSize="small" />
                            </FooterLinkItem>
                            <FooterLinkItem href="#" aria-label="Instagram">
                                <Instagram fontSize="small" />
                            </FooterLinkItem>
                            <FooterLinkItem href="#" aria-label="Twitter">
                                <Twitter fontSize="small" />
                            </FooterLinkItem>
                        </SocialRow>
                    </LinkColumn>
                </FooterGrid>

                <CopyrightBar>
                    <CopyrightText>© {currentYear} SwiftBite. All rights reserved.</CopyrightText>
                </CopyrightBar>
            </FooterContainer>
        </StyledFooter>
    );
};
