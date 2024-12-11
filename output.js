import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
export const frontmatter = {
  "title": "Fixed Income (Part 1)",
  "date": "December 9, 2024",
  "author": "",
  "excerpt": "Fixed income covers the topic of bonds and other coupon-like investment securities.",
  "cover_image": "",
  "categories": ["CFA Level 2"],
  "tags": ["Fixed income"],
  "slug": "fixed-income-1",
  "nextUrl": "fixed-income-2"
};
import Note from "../../components/Note";
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "Credit Analysis"
    }), "\n", "\n", _jsx(_components.h3, {
      children: "Credit Risk"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Default Risk"
      }), "\n", _jsx(_components.li, {
        children: "Credit Spread Risk"
      }), "\n", _jsx(_components.li, {
        children: "Downgrade Risk"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Credit ratings by the nationally recognized rating agencies assess ", _jsx(_components.strong, {
          children: "default"
        }), " risk only."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Releases by Rating Agencies"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Credit Rating - reflects the probability of default (short- and long-term debt) and the rate of loss (long-term debt)"
      }), "\n", _jsx(_components.li, {
        children: "Rating Watch - announcement that the rating agency is reviewing a particular issue in advance of a potential rating change"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Rating Outlook"
      }), "\n"]
    }), "\n", _jsx(Note, {
      children: "Total Debt = Current Liabilities + Long-Term Debt"
    }), "\n", _jsx(_components.h3, {
      children: "High-Yield Issuers"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Bank debt", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Loans acquired from banks"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["Reset notes", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Bonds whose coupon rates are adjusted periodically"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsx(_components.li, {
        children: "Senior and Subordinated debt"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "High-yield borrowers typically rely on short-term, floating-rate, senior bank debt."
      }), "\n", _jsx(_components.li, {
        children: "\"Senior Bank Debt\" has a higher claim on assets than \"Senior Debt.\""
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "Liquidity"
    }), "\n", _jsx(_components.h3, {
      children: "Liquidity Factors"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Money Supply (traditional guage of liquidity)"
      }), "\n", _jsx(_components.li, {
        children: "Appetite for Risk"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Traditional Banks (Commercial Banks)"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Heavily regulated"
      }), "\n", _jsx(_components.li, {
        children: "In return for regulation, banks receive (1) deposit insurance (FDIC) and (2) access to the Fed's discount window (guaranteed source of liquidity)"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Shadow Banking System"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "The group of non-bank institutions that offer liquidity to the market"
      }), "\n", _jsx(_components.li, {
        children: "The commercial bank's most important economic role is to accept funds from depositors and lend those funds to borrowers."
      }), "\n", _jsx(_components.li, {
        children: "Shadow banks raise money from individual investors and provide it directly or indirectly to firms and households, a function that was once exclusively the domain of commercial banks."
      }), "\n", _jsx(_components.li, {
        children: "Examples of Shadow Banks + Hedge funds + Private Equity Funds + Trading houses + Conduits + Structured investments + REITs + Collateralized debt obligations (CDOs) + Collateralized loan obligations (CLOs)"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Funding Sources of the Shadow Banking System"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Reverse repos"
      }), "\n", _jsx(_components.li, {
        children: "Asset-backed Commercial Paper"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Minsky Framework"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "Hedge Unit (borrower can afford interest and principal payments)"
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "Speculative Unit (borrower can afford interest payments only)"
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "Ponzi Unit (borrower can't afford interest or principal payments)"
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "In 2006, mortgage lenders were effectively granting at-the-money call options on the value of their properties."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "Term Structure and Volatility of Interest Rates"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Yield Curve Shifts 1. Parallel shifts 2. Nonparallel shifts: Twists + Flattening of curve (lower slope) + Steepening of curve (higher slope) 3. Nonparallel shifts: Butterfly + Positive butterfly shift (less curvature) + Negative butterfly shift (more curvature)"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Factors Contributing to the Returns on Zero-Coupon Treasury Securities"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Parallel shifts in yield curve (90%)"
      }), "\n", _jsx(_components.li, {
        children: "Twists, change in yield curve slope (8.5%)"
      }), "\n", _jsx(_components.li, {
        children: "Butterfly shifts, changes in curvature of yield curve (1.5%)"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "Yields for Yield Curve"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Treasury Coupon Strips"
      }), "\n", _jsx(_components.li, {
        children: "On-the-run Treasury issues"
      }), "\n", _jsx(_components.li, {
        children: "On-the-run Treasury issues and selected off-the-run Treasury issues"
      }), "\n", _jsx(_components.li, {
        children: "All Treasury coupon securities and bills"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "The liquidity of the strips market is not as great as that of the Treasury coupon market."
      }), "\n", _jsx(_components.li, {
        children: "A problem with just using on-the-run issues is the large gap between maturities, especially after 5 years."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "Swap Curve (LIBOR curve)"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Advantages of Using the Swap Curve"
      }), "\n", _jsx(_components.li, {
        children: "Pure Expectations Theory of the Term Structure of Interest Rates"
      }), "\n", _jsx(_components.li, {
        children: "Liquidity Preference Theory of the Term Structure of Interest Rates"
      }), "\n", _jsx(_components.li, {
        children: "Preferred Habitat Theory of the Term Structure of Interest Rates"
      }), "\n", _jsx(_components.li, {
        children: "Valuing Bonds with Embedded Options"
      }), "\n", _jsx(_components.li, {
        children: "Mortgage-Backed Sector of the Bond Market"
      }), "\n", _jsx(_components.li, {
        children: "Agency Passthrough Securities issued in U.S."
      }), "\n"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Ginnie Mae - Issued by the Government National Mortgage Association (GNMA) and possess no credit risk"
      }), "\n", _jsx(_components.li, {
        children: "Freddie Mac - Issued by the Federal Home Loan Mortgage Corporation (FHLMC)"
      }), "\n", _jsx(_components.li, {
        children: "Fannie Mae - Issued by the Federal National Mortgage Association (FNMA)"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "The most important characteristic of passthrough securities is their prepayment speed."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Factors Affecting Prepayment Speeds"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Prevailing mortage rates"
      }), "\n", _jsx(_components.li, {
        children: "Housing Turnover (interest rate path)"
      }), "\n", _jsx(_components.li, {
        children: "Characteristics of the underlying mortgages"
      }), "\n"]
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
