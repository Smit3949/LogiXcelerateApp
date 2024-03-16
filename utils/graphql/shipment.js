import { gql } from "@apollo/client";

export const globalPortFields = gql`
  fragment globalPortFields on PortObjectType {
    id
    name
    type
    iata_code
    unlocode
    customs_code
    address
    parent_id
    city {
      name
      code
    }
    country {
      name
      code
    }
    country_code
  }
`;

export const minimumCompanyFields = gql`
  fragment minimumCompanyFields on CompanyObjectType {
    id
    status
    registered_name
    country_of_incorporation
    company_group
    entity_type
    logo
    is_disabled
    is_customer
    is_vendor
    remarks
    company_identification_number
  }
`;

export const invoiceAddressFields = gql`
  fragment invoiceAddressFields on AddressObjectType {
    name
    address_line_1
    address_line_2
    state_tax_code
    postal_code
    entity_type
    company_id
    id
    print_address
    state_code
    state_name
    city_name
    city {
      id
      name
      city_code
    }
    country_code
    country_name
  }
`;

export const globalLocationFields = gql`
  fragment globalLocationFields on LocationObjectType {
    id
    name
    type
    iata_code
    unlocode
    customs_code
    address
    parent_id
    city {
      name
      code
    }
    country {
      name
      code
    }
    country_code
  }
`;
export const finalPlaceOfDeliveryFields = gql`
  fragment finalPlaceOfDeliveryFields on CityObjectType {
    code
    name
    state_code
    state_name
    country_code
    country_name
    id
  }
`;

export const stuffingLocationFields = gql`
  fragment stuffingLocationFields on StuffingLocationObject {
    company {
      ...minimumCompanyFields
    }
    company_address {
      ...invoiceAddressFields
    }
    port {
      ...globalPortFields
    }
  }
  ${minimumCompanyFields}
  ${invoiceAddressFields}
  ${globalPortFields}
`;

export const chargeTermFields = gql`
  fragment chargeTermFields on ChargeTermObject {
    destination_charges_terms
    due_agent_charges_terms
    due_carrier_terms
    freight_terms
    origin_charges_terms
    other_charges_terms
  }
`;

export const stockOrderItemFields = gql`
  fragment stockOrderItemFields on StockOrderItemObject {
    awb_number
    id
    next_actions
    shipment_document_id
    status
    stock_order {
      id
      supplier_company {
        id
        registered_name
      }
      billing_branch {
        id
      }
    }
  }
`;

export const shipmentDocumentFields = gql`
  fragment shipmentDocumentFields on ShipmentDocumentObject {
    bl_type
    document_id
    document_status
    eawb_status
    document_type
    shipment_id
    shipment_number
    shipment_date
    house_number_sequence_id
    id
    release_type
    charge_terms {
      ...chargeTermFields
    }
    stock_order_item {
      ...stockOrderItemFields
    }
    shipper_on_document
    consignee_on_document
    is_surrendered
    surrender_location
    si_filing_date
    email_activities {
      id
      purpose
    }
  }
  ${chargeTermFields}
  ${stockOrderItemFields}
`;

export const packagesFields = gql`
  fragment packagesFields on ShipmentPackageObject {
    id
    shipment_id
    master_shipment_id
    gross_volume
    height
    length
    total_number_of_packages
    per_piece_weight
    type_of_package
    width
    dimension_unit
  }
`;

export const shipmentServicesFields = gql`
  fragment shipmentServicesFields on ServiceObject {
    destination {
      clearance
      transport
    }
    freight_forwarding
    cargo_insurance
    empty_container_insurance
    origin {
      clearance
      fumigation
      palletization
      transport
    }
  }
`;

export const globalCarrierFields = gql`
  fragment globalCarrierFields on CarrierObjectType {
    id
    name
    carrier_type
    iata_carrier_code
    standard_alpha_carrier_code
    iata_awb_prefix
  }
`;

export const shipmentCustomDetailsFields = gql`
  fragment shipmentCustomDetailsFields on ShipmentCustomDetailObject {
    custom_document_date
    custom_document_number
    trade_type
    country
    id
    shipment_id
    assessable_value
    invoice_value
    duty_amount
    custom_clearance_location {
      id
      name
      type
      iata_code
      unlocode
      customs_code
      address
      is_customs_location
      country_code
    }
    shipping_bill_type
    invoice_value
    fob_value
    cif_value
  }
`;
export const shipmentInvoicesFields = gql`
  fragment shipmentInvoicesFields on ShipmentInvoiceObject {
    id
    invoice_date
    invoice_number
    shipment_id
  }
`;

export const shipmentPropertiesFields = gql`
  fragment shipmentPropertiesFields on ShipmentPropertiesObject {
    is_general
    is_hazardous
    is_temp_controlled
    is_battery
    is_perishable
    hazardous_details {
      un_number
      un_imo_class
      proper_shipping_name
      packaging_group_type
      air_craft_type
      is_radioactive
    }
    temp_controlled_details {
      temperature_range
      cooling_type
    }
    battery_details {
      battery_type
    }
  }
`;

export const productRatingFields = gql`
  fragment productRatingFields on ShipmentProductRatingObject {
    id
    cargo_type
    chargeable_basis
    chargeable_weight
    gross_weight
    quantity
    rate_class
    uld_numbers
    uld_type
    commodity_item_number
    rate_per_charge
    shipment_id
    commission_percentage
    shipment_estimate {
      buy_transaction_identifier
    }
  }
`;

export const OceanVesselFields = gql`
  fragment OceanVesselFields on OceanVesselObjectType {
    flagId: flag_id
    imo
    mmsi
    name
    vesselType: vessel_type
    is_frequent
  }
`;

export const oceanBookingDetailsFields = gql`
  fragment oceanBookingDetailsFields on OceanShipmentBookingObject {
    id
    cy_cutoff_date
    documents_cutoff_date
    shipment_id
    shipping_line_booking_date
    shipping_line_booking_number
    shipping_line_service_type
    si_cutoff_date
    booking_validity_date
    booking_expires_in
  }
`;

export const branchAccountFields = gql`
  fragment branchAccountFields on BranchAccount {
    id
    name
    entity_type
    default_address {
      ...invoiceAddressFields
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
    state_tax_code
    tax_registration_number
    tax_registration_type
    erp_cost_center_id
  }
  ${invoiceAddressFields}
`;

export const shipmentEventFields = gql`
  fragment shipmentEventFields on ShipmentEventObject {
    id
    event_by {
      id
      first_name
      last_name
    }
    event_number
    event_data
    event_date
    event_type

    location {
      ... on PortObjectType {
        ...globalPortFields
      }
    }
    name
    shipment_id
  }
  ${globalPortFields}
`;

export const shipmentPartyFields = gql`
  fragment shipmentPartyFields on ShipmentPartyObject {
    id
    name
    party_address {
      ...invoiceAddressFields
    }
    party_company {
      ...minimumCompanyFields
    }
    party_details
    shipment_id
    party_referenceable_id
    party_referenceable_type
  }
  ${minimumCompanyFields}
  ${invoiceAddressFields}
`;

// only added what is needed for now
export const userAccountFields = gql`
  fragment userAccountFields on UserAccount {
    id
    first_name
    last_name
    email
    username
  }
`;

export const shipmentUsersFields = gql`
  fragment shipmentUsersFields on ShipmentUserObject {
    id
    role
    user_id
    user_type
    user {
      ...userAccountFields
    }
  }
  ${userAccountFields}
`;

export const routingDetailsFields = gql`
  fragment routingDetailsFields on ShipmentRoutingDetailObject {
    id
    carrier {
      ...globalCarrierFields
    }
    estimated_time_of_arrival
    actual_time_of_arrival
    estimated_time_of_departure
    location {
      ...globalPortFields
    }
    location_tags
    mode_of_transport
    route_order
    routing_type
    voyage_date
    voyage_number
  }
  ${globalCarrierFields}
  ${globalPortFields}
`;

export const userContactFields = gql`
  fragment userContactFields on UserContactObjectType {
    id
    first_name
    last_name
    email
    title
    department
    mobile_number
    is_disabled
    is_internal
    dial_code
    created_at
    updated_at
  }
`;

const containerMinimumFields = gql`
  fragment containerMinimumFields on ShipmentContainerObject {
    id
    container_type_code
    container_type
    maximum_cargo_weight
    maximum_cargo_volume
    container_number
    is_non_iso_container
    carrier_seal_number
    cargo_gross_weight
    verified_gross_mass
    weight_slip_number
    cargo_net_weight
    commercial_invoice_number
    purchase_order_number
    last_action_status
    shipper_seal_number
    customs_seal_number
    container_cargo_details {
      id
      gross_weight
      net_weight
    }
  }
`;

export const salesPersonFields = gql`
  fragment salesPersonFields on SalesPersonObjectType {
    id
    name
    employee
    enable
    user_contact {
      ...userContactFields
    }
  }
  ${userContactFields}
`;

export const cargoFields = gql`
  fragment cargoFields on CargoObjectType {
    id
    commodity {
      id
      name
      dangerous_cargo
      dry_cargo
      live_reefer_cargo
      oog_cargo
    }
    commodity_description
    total_packages
    package_type
    ordered_qty
    allocation_pending_quantity
    gross_volume
    gross_weight
    weight_unit
    volume_unit
    cargo_properties {
      emergency_contact_name
      emergency_contact_number
      ems_number
      flash_point
      flash_point_unit
      is_battery
      is_hazardous
      is_perishable
      is_temp_controlled
      net_weight
      net_weight_unit
      packaging_group
      proper_shipping_name
      technical_name
      un_imo_class
      un_number
    }
    shipment_packages {
      id
      height
      width
      length
      total_number_of_packages
      per_piece_weight
      type_of_package
      gross_volume
      dimension_unit
    }
  }
`;

export const trackingEventFields = gql`
  fragment trackingEventFields on TrackingEventObject {
    id
    name
    actual_date
    estimated_date
    event_data
    event_type
    sequence_number
    location {
      ... on AddressObjectType {
        id
        name
        country_code
        city {
          name
        }
        print_address
      }
      ... on PortObjectType {
        id
        name
        country_code
        city {
          name
        }
      }
    }
  }
`;

export const routingLegFields = gql`
  fragment routingLegFields on RoutingLegObjectType {
    id
    sequence_number
    estimated_time_of_arrival
    estimated_time_of_departure
    actual_time_of_arrival
    actual_time_of_departure
    mode_of_transit
    routing_type
    voyage_number
    vessel {
      flag_id
      imo
      mmsi
      name
      vessel_type
    }
    origin {
      id
      tags
      location {
        id
        name
        unlocode
        city_code
        state_code
        country_code
        is_customs_location
      }
      address {
        id
        name
        city_name
      }
      company {
        id
        registered_name
      }
      terminal {
        id
        name
      }
    }
    destination {
      id
      tags
      location {
        id
        name
        unlocode
        city_code
        state_code
        country_code
        is_customs_location
      }
      address {
        id
        name
        city_name
      }
      company {
        id
        registered_name
      }
      terminal {
        id
        name
      }
    }
    voyage_schedule_id
  }
`;

export const routingLocationObjectType = gql`
  fragment routingLocationObjectType on RoutingLocationObjectType {
    id
    name
    type
    unlocode
    city_code
    state_code
    country_code
    is_customs_location
  }
`;

export const shipmentFields = gql`
  fragment shipmentFields on ShipmentObject {
    id
    accounting_status
    transporter_name
    status
    created_at
    updated_at
    next_actions
    business_type
    booking_status
    shipment_booking_number
    is_linked_with_booking
    commodity_description
    is_from_consol_helper
    consol_type
    voyage_number
    current_voyage_number
    vessel_name
    movement_type
    destuffing_type
    customer_company {
      ...minimumCompanyFields
    }
    customer_address {
      id
      name
      company_id
      city_name
      entity_type
      print_address
    }
    cargo_type
    movement_mode
    vehicle_category
    vehicle_license_plate_number
    trip_distance
    driver_name
    driver_contact_number
    sales_agent {
      ...salesPersonFields
    }
    quotation_number
    other_job_number
    purchase_order_number
    received_for_shipment_by_shipping_line_date
    received_for_shipment_by_forwarder_date
    shipped_on_board_date
    consignee_party_name
    stuffing_type
    stuffing_location {
      ...stuffingLocationFields
    }
    cargos {
      ...cargoFields
    }
    destuffing_type
    destuffing_location {
      ...stuffingLocationFields
    }
    movement_type
    movement_location {
      ...stuffingLocationFields
    }
    final_place_of_delivery {
      ...finalPlaceOfDeliveryFields
    }
    final_place_of_delivery_print
    shipment_documents {
      ...shipmentDocumentFields
    }
    shipment_packages {
      ...packagesFields
    }
    services {
      ...shipmentServicesFields
    }
    carrier {
      ...globalCarrierFields
    }
    shipment_custom_details {
      ...shipmentCustomDetailsFields
    }
    shipment_invoices {
      ...shipmentInvoicesFields
    }
    shipment_properties {
      ...shipmentPropertiesFields
    }
    shipment_product_ratings {
      ...productRatingFields
    }
    ocean_vessel {
      ...OceanVesselFields
    }
    current_vessel {
      ...OceanVesselFields
    }
    carrier_product
    ocean_shipment_booking {
      ...oceanBookingDetailsFields
    }
    document_dispatch_date
    estimated_time_of_arrival
    eta_status
    linked_shipment_id
    linked_shipment {
      id
      job_number
    }
    child_linked_shipments {
      id
      job_number
    }
    eta_tsp1
    eta_tsp2
    etd_tsp1
    etd_tsp2
    estimated_time_of_arrival_at_fpod
    actual_time_of_arrival
    actual_time_of_arrival_pocd
    destination_last_inward_date
    pocd_last_inward_date
    estimated_time_of_departure
    atd_pol_date
    freight_type
    gross_volume
    gross_weight
    net_weight
    chargeable_weight
    volumetric_weight
    incoterms
    letter_of_credit_number
    is_external_quotation_number
    involved_branch {
      ...branchAccountFields
    }
    accessible_by_branches {
      id
      name
      erp_cost_center_id
    }
    job_number
    job_date
    load_type
    master_shipment_id
    master_shipment {
      id
      job_number
      shipment_documents {
        ...shipmentDocumentFields
      }
      routing_legs {
        ...routingLegFields
      }
    }
    port_of_discharge {
      ...globalPortFields
    }
    port_of_loading {
      ...globalPortFields
    }
    tsp_1 {
      ...globalPortFields
    }
    tsp_2 {
      ...globalPortFields
    }
    place_of_carrier_receipt {
      ...globalPortFields
    }
    place_of_carrier_delivery {
      ...globalPortFields
    }
    port_of_discharge_terminal {
      ...globalPortFields
    }
    port_of_loading_terminal {
      ...globalPortFields
    }
    place_of_carrier_delivery_terminal {
      ...globalPortFields
    }
    shipment_events {
      ...shipmentEventFields
    }
    shipment_parties {
      ...shipmentPartyFields
    }
    shipment_type
    shipment_users {
      ...shipmentUsersFields
    }
    shipment_routing_details {
      ...routingDetailsFields
    }
    commodity_description
    ocean_transport_order {
      id
      empty_pickup_location {
        ...routingLocationObjectType
      }
    }
    trade_type
    volume_unit
    credit_status
    weight_unit
    total_number_of_packages
    remarks
    delivery_order_number
    ocean_transport_order_id
    routing_legs {
      ...routingLegFields
    }
    booking_requests {
      id
      shipment_booking_number
      cargos {
        id
        cargo_properties {
          is_hazardous
        }
      }
      routing_legs {
        id
        routing_type
        origin {
          id
          terminal {
            name
          }
        }
        destination {
          id
          terminal {
            name
          }
        }
      }
    }
    inquiry_option {
      id
      quotation_number
    }
    shipment_containers {
      ...containerMinimumFields
      status
    }
    house_shipments {
      id
      status
    }
    any_house_linked_with_lcl_booking
    last_action_status
    last_comment
    last_status_update
    tracking_events {
      ...trackingEventFields
    }
    lfd_at_carrier
    lfd_at_empty_return
    lfd_at_pod
    lfd_at_pocd
    job_execution_date
    forwarding_invoice_status
    accounting_status
    atd_pcr_date
    container_tracking_events_summary {
      picked_up_containers
      pickup_pending_containers
      loaded_containers
      gated_in_containers
      late_gated_in_containers
      gated_out_containers
      empty_returned_containers
      demurrage_containers
      detention_containers
    }
    vehicle {
      id
      ownership_type
      vehicle_category
      vehicle_chassis_number
      vehicle_fuel_type
      vehicle_insurance_amount
      vehicle_insurance_coverage_type
      vehicle_insurance_date
      vehicle_insurance_expiry_date
      vehicle_insurance_number
      vehicle_license_plate_number
      vehicle_registration_date
      vehicle_registration_expiry_date
      vehicle_status
      company {
        ...minimumCompanyFields
      }
    }
    driver {
      id
      driver_name
      driver_contact_number
      driver_license_number
    }
    ordered_quantity
    allocated_quantity
    allocation_pending_quantity
    shipment_manifests {
      id
      location_type
      manifest_number
      trade_type
      manifest_date
      country
      line_number
      subline_number
      inward_date
    }
    isf_filed_by
    priority
    color_code
  }
  ${minimumCompanyFields}
  ${salesPersonFields}
  ${stuffingLocationFields}
  ${finalPlaceOfDeliveryFields}
  ${shipmentDocumentFields}
  ${packagesFields}
  ${cargoFields}
  ${shipmentServicesFields}
  ${globalCarrierFields}
  ${shipmentCustomDetailsFields}
  ${shipmentInvoicesFields}
  ${shipmentPropertiesFields}
  ${productRatingFields}
  ${OceanVesselFields}
  ${oceanBookingDetailsFields}
  ${branchAccountFields}
  ${globalPortFields}
  ${shipmentEventFields}
  ${shipmentPartyFields}
  ${shipmentUsersFields}
  ${routingDetailsFields}
  ${containerMinimumFields}
  ${trackingEventFields}
  ${routingLegFields}
  ${routingLocationObjectType}
`;

export const SHIPMENTS = gql`
  query shipments($master_shipment_id: ID!) {
    shipments(master_shipment_id: $master_shipment_id) {
      ...shipmentFields
    }
  }
  ${shipmentFields}
`;
