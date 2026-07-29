import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Typography } from '@mui/material';

import {
    CopyrightBar,
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
                        <Typography variant="h4">Company</Typography>
                        <FooterLinkItem href="#">About Us</FooterLinkItem>
                        <FooterLinkItem href="#">Contact Us</FooterLinkItem>
                    </LinkColumn>

                    <LinkColumn>
                        <Typography variant="h4">Legal</Typography>
                        <FooterLinkItem href="#">Terms & Conditions</FooterLinkItem>
                        <FooterLinkItem href="#">Privacy Policy</FooterLinkItem>
                    </LinkColumn>

                    <LinkColumn>
                        <Typography variant="h4">Follow Us</Typography>
                        <SocialRow>
                            <FooterLinkItem
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <Facebook fontSize="small" />
                            </FooterLinkItem>

                            <FooterLinkItem
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Instagram fontSize="small" />
                            </FooterLinkItem>

                            <FooterLinkItem
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Twitter fontSize="small" />
                            </FooterLinkItem>
                        </SocialRow>
                    </LinkColumn>
                </FooterGrid>

                <CopyrightBar>
                    <Typography>© {currentYear} SwiftBite. All rights reserved.</Typography>
                </CopyrightBar>
            </FooterContainer>
        </StyledFooter>
    );
};
