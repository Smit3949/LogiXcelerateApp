import { gql } from "@apollo/client";

export const companyAccountFeaturesFields = gql`
  fragment companyAccountFeaturesFields on CompanyAccountFeaturesObjectType {
    stock_management
    enforce_credit_control
    allow_house_summary_screen
    consol_helper
    inventory_management
    use_booking_request
    state_code_needed
    use_booking_request
  }
`;

export const GET_USER_PROFILE = gql`
  query user_profile {
    user_profile {
      id
      first_name
      last_name
      name
      email
      user_level
      user_contact_id
      roles {
        id
        role_name
        permissions {
          id
          permission_name
          types
          doc_type
        }
      }
      tenant_id
      branch_accounts {
        id
        name
        entity_type
        default_address {
          id
          name
          city {
            id
            name
          }
          city_name
          company_id
          print_address
          state_name
          state_code
          country_name
          country_code
        }
        address_types
        city {
          name
          code
        }
        state {
          name
          code
        }
        country {
          name
          code
        }
        company_account_id
        postal_code
        print_address
        erp_cost_center_id
      }
      company_account {
        country_of_incorporation
        id
        registered_name
        display_name
        default_currency
        business_type
        subscriptions {
          id
          app {
            label
            name
            description
            app_type
          }
          plan_type
          subscription_data
        }
        default_company {
          id
          business_type
          country_of_incorporation
          registered_name
          logo
          letter_head
          regulatory_details_data {
            id
            key
            value
          }
          company_group
        }
        primary_business
        business_verticals {
          id
          name
          fields
        }
        features {
          ...companyAccountFeaturesFields
        }
        agent_iata_code
        is_iata_agent
        subdomain
      }
    }
  }
  ${companyAccountFeaturesFields}
`;
