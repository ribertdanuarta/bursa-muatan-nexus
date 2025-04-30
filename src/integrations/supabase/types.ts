export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      app_settings: {
        Row: {
          created_at: string | null
          font_size: number | null
          id: string
          language: Database["public"]["Enums"]["app_language"] | null
          notification_enabled: boolean | null
          offline_storage_limit_mb: number | null
          sync_on_mobile_data: boolean | null
          theme: Database["public"]["Enums"]["app_theme"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          font_size?: number | null
          id?: string
          language?: Database["public"]["Enums"]["app_language"] | null
          notification_enabled?: boolean | null
          offline_storage_limit_mb?: number | null
          sync_on_mobile_data?: boolean | null
          theme?: Database["public"]["Enums"]["app_theme"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          font_size?: number | null
          id?: string
          language?: Database["public"]["Enums"]["app_language"] | null
          notification_enabled?: boolean | null
          offline_storage_limit_mb?: number | null
          sync_on_mobile_data?: boolean | null
          theme?: Database["public"]["Enums"]["app_theme"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author: string
          content: string
          created_at: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          author: string
          content: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          author?: string
          content?: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: []
      }
      cargos: {
        Row: {
          accepted_price: number | null
          actual_delivery_time: string | null
          actual_pickup_time: string | null
          assigned_driver_id: string | null
          assigned_transporter_id: string | null
          assigned_vehicle_id: string | null
          budget: number | null
          cargo_type: Database["public"]["Enums"]["cargo_type"]
          completed_at: string | null
          created_at: string | null
          delivery_deadline: string
          description: string | null
          destination_address: string
          destination_location: unknown
          distance_km: number | null
          id: string
          is_deleted: boolean | null
          map_visibility: boolean | null
          photo_url_1: string | null
          photo_url_2: string | null
          pickup_address: string
          pickup_deadline: string
          pickup_location: unknown
          published_at: string | null
          quantity: number
          required_vehicle_type: Database["public"]["Enums"]["vehicle_type"]
          shipper_id: string
          special_handling: string | null
          status: Database["public"]["Enums"]["cargo_status"]
          title: string
          transportation_mode: Database["public"]["Enums"]["transportation_mode"]
          updated_at: string | null
          volume: number | null
          weight: number
        }
        Insert: {
          accepted_price?: number | null
          actual_delivery_time?: string | null
          actual_pickup_time?: string | null
          assigned_driver_id?: string | null
          assigned_transporter_id?: string | null
          assigned_vehicle_id?: string | null
          budget?: number | null
          cargo_type: Database["public"]["Enums"]["cargo_type"]
          completed_at?: string | null
          created_at?: string | null
          delivery_deadline: string
          description?: string | null
          destination_address: string
          destination_location: unknown
          distance_km?: number | null
          id?: string
          is_deleted?: boolean | null
          map_visibility?: boolean | null
          photo_url_1?: string | null
          photo_url_2?: string | null
          pickup_address: string
          pickup_deadline: string
          pickup_location: unknown
          published_at?: string | null
          quantity?: number
          required_vehicle_type: Database["public"]["Enums"]["vehicle_type"]
          shipper_id: string
          special_handling?: string | null
          status?: Database["public"]["Enums"]["cargo_status"]
          title: string
          transportation_mode: Database["public"]["Enums"]["transportation_mode"]
          updated_at?: string | null
          volume?: number | null
          weight: number
        }
        Update: {
          accepted_price?: number | null
          actual_delivery_time?: string | null
          actual_pickup_time?: string | null
          assigned_driver_id?: string | null
          assigned_transporter_id?: string | null
          assigned_vehicle_id?: string | null
          budget?: number | null
          cargo_type?: Database["public"]["Enums"]["cargo_type"]
          completed_at?: string | null
          created_at?: string | null
          delivery_deadline?: string
          description?: string | null
          destination_address?: string
          destination_location?: unknown
          distance_km?: number | null
          id?: string
          is_deleted?: boolean | null
          map_visibility?: boolean | null
          photo_url_1?: string | null
          photo_url_2?: string | null
          pickup_address?: string
          pickup_deadline?: string
          pickup_location?: unknown
          published_at?: string | null
          quantity?: number
          required_vehicle_type?: Database["public"]["Enums"]["vehicle_type"]
          shipper_id?: string
          special_handling?: string | null
          status?: Database["public"]["Enums"]["cargo_status"]
          title?: string
          transportation_mode?: Database["public"]["Enums"]["transportation_mode"]
          updated_at?: string | null
          volume?: number | null
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "cargos_assigned_driver_id_fkey"
            columns: ["assigned_driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cargos_assigned_transporter_id_fkey"
            columns: ["assigned_transporter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cargos_assigned_vehicle_id_fkey"
            columns: ["assigned_vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cargos_shipper_id_fkey"
            columns: ["shipper_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_statistics: {
        Row: {
          average_rating: number | null
          cancelled_deliveries: number | null
          completed_deliveries: number | null
          created_at: string | null
          id: string
          last_delivery_date: string | null
          total_deliveries: number | null
          total_value: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          average_rating?: number | null
          cancelled_deliveries?: number | null
          completed_deliveries?: number | null
          created_at?: string | null
          id?: string
          last_delivery_date?: string | null
          total_deliveries?: number | null
          total_value?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          average_rating?: number | null
          cancelled_deliveries?: number | null
          completed_deliveries?: number | null
          created_at?: string | null
          id?: string
          last_delivery_date?: string | null
          total_deliveries?: number | null
          total_value?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_statistics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      device_sessions: {
        Row: {
          created_at: string | null
          device_id: string
          device_name: string | null
          device_type: string | null
          id: string
          is_active: boolean | null
          last_offline_action_timestamp: string | null
          last_sync_at: string | null
          offline_data_size_kb: number | null
          offline_mode_enabled: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_id: string
          device_name?: string | null
          device_type?: string | null
          id?: string
          is_active?: boolean | null
          last_offline_action_timestamp?: string | null
          last_sync_at?: string | null
          offline_data_size_kb?: number | null
          offline_mode_enabled?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_id?: string
          device_name?: string | null
          device_type?: string | null
          id?: string
          is_active?: boolean | null
          last_offline_action_timestamp?: string | null
          last_sync_at?: string | null
          offline_data_size_kb?: number | null
          offline_mode_enabled?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "device_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_statistics: {
        Row: {
          cancelled_assignments: number | null
          completed_assignments: number | null
          created_at: string | null
          driver_id: string
          id: string
          last_assignment_date: string | null
          total_assignments: number | null
          total_distance: number | null
          updated_at: string | null
        }
        Insert: {
          cancelled_assignments?: number | null
          completed_assignments?: number | null
          created_at?: string | null
          driver_id: string
          id?: string
          last_assignment_date?: string | null
          total_assignments?: number | null
          total_distance?: number | null
          updated_at?: string | null
        }
        Update: {
          cancelled_assignments?: number | null
          completed_assignments?: number | null
          created_at?: string | null
          driver_id?: string
          id?: string
          last_assignment_date?: string | null
          total_assignments?: number | null
          total_distance?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "driver_statistics_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          created_at: string | null
          experience_years: number | null
          full_name: string
          id: string
          is_active: boolean | null
          license_number: string
          owner_id: string
          phone_number: string
          photo_url: string | null
          rating: number | null
          specialization: string | null
          total_ratings: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          experience_years?: number | null
          full_name: string
          id?: string
          is_active?: boolean | null
          license_number: string
          owner_id: string
          phone_number: string
          photo_url?: string | null
          rating?: number | null
          specialization?: string | null
          total_ratings?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          experience_years?: number | null
          full_name?: string
          id?: string
          is_active?: boolean | null
          license_number?: string
          owner_id?: string
          phone_number?: string
          photo_url?: string | null
          rating?: number | null
          specialization?: string | null
          total_ratings?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "drivers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      help_faqs: {
        Row: {
          answer: string
          category: string
          created_at: string | null
          id: string
          is_active: boolean | null
          order_number: number
          question: string
          updated_at: string | null
        }
        Insert: {
          answer: string
          category: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          order_number: number
          question: string
          updated_at?: string | null
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          order_number?: number
          question?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      map_settings: {
        Row: {
          animation_enabled: boolean | null
          cluster_markers: boolean | null
          created_at: string | null
          default_view: string | null
          default_zoom: number | null
          id: string
          show_traffic: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          animation_enabled?: boolean | null
          cluster_markers?: boolean | null
          created_at?: string | null
          default_view?: string | null
          default_zoom?: number | null
          id?: string
          show_traffic?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          animation_enabled?: boolean | null
          cluster_markers?: boolean | null
          created_at?: string | null
          default_view?: string | null
          default_zoom?: number | null
          id?: string
          show_traffic?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "map_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_queue: {
        Row: {
          created_at: string | null
          data: Json | null
          error_message: string | null
          icon: string | null
          id: number
          message: string
          processed_at: string | null
          retry_count: number | null
          status: string | null
          title: string
          updated_at: string | null
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          error_message?: string | null
          icon?: string | null
          id?: number
          message: string
          processed_at?: string | null
          retry_count?: number | null
          status?: string | null
          title: string
          updated_at?: string | null
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          error_message?: string | null
          icon?: string | null
          id?: number
          message?: string
          processed_at?: string | null
          retry_count?: number | null
          status?: string | null
          title?: string
          updated_at?: string | null
          url?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          read_at: string | null
          related_entity_id: string | null
          related_entity_type: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          read_at?: string | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          read_at?: string | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      offline_actions: {
        Row: {
          action_data: Json
          action_type: Database["public"]["Enums"]["offline_action_type"]
          client_timestamp: string
          created_at: string | null
          device_id: string
          error_message: string | null
          id: string
          server_timestamp: string | null
          status: Database["public"]["Enums"]["offline_action_status"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          action_data: Json
          action_type: Database["public"]["Enums"]["offline_action_type"]
          client_timestamp: string
          created_at?: string | null
          device_id: string
          error_message?: string | null
          id?: string
          server_timestamp?: string | null
          status?: Database["public"]["Enums"]["offline_action_status"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          action_data?: Json
          action_type?: Database["public"]["Enums"]["offline_action_type"]
          client_timestamp?: string
          created_at?: string | null
          device_id?: string
          error_message?: string | null
          id?: string
          server_timestamp?: string | null
          status?: Database["public"]["Enums"]["offline_action_status"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "offline_actions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      offline_cache: {
        Row: {
          cache_data: Json
          cache_key: string
          cache_type: string
          created_at: string | null
          device_id: string
          expires_at: string
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cache_data: Json
          cache_key: string
          cache_type: string
          created_at?: string | null
          device_id: string
          expires_at: string
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cache_data?: Json
          cache_key?: string
          cache_type?: string
          created_at?: string | null
          device_id?: string
          expires_at?: string
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "offline_cache_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_transactions: {
        Row: {
          amount: number
          created_at: string | null
          gateway_response: Json | null
          gateway_transaction_id: string | null
          id: string
          paid_at: string | null
          payment_gateway: string
          payment_method: string
          payment_url: string | null
          status: Database["public"]["Enums"]["payment_status"]
          subscription_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          gateway_response?: Json | null
          gateway_transaction_id?: string | null
          id?: string
          paid_at?: string | null
          payment_gateway: string
          payment_method: string
          payment_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          gateway_response?: Json | null
          gateway_transaction_id?: string | null
          id?: string
          paid_at?: string | null
          payment_gateway?: string
          payment_method?: string
          payment_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_transactions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_webhooks: {
        Row: {
          created_at: string | null
          event_type: string
          gateway: string
          id: string
          payload: Json
          payment_id: string | null
          processed: boolean | null
          processed_at: string | null
          processing_error: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          gateway: string
          id?: string
          payload: Json
          payment_id?: string | null
          processed?: boolean | null
          processed_at?: string | null
          processing_error?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          gateway?: string
          id?: string
          payload?: Json
          payment_id?: string | null
          processed?: boolean | null
          processed_at?: string | null
          processing_error?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_webhooks_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payment_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      price_offers: {
        Row: {
          cargo_id: string
          created_at: string | null
          driver_id: string
          estimated_delivery_time: string | null
          estimated_pickup_time: string | null
          id: string
          is_deleted: boolean | null
          notes_to_shipper: string | null
          price: number
          responded_at: string | null
          special_features: string | null
          status: Database["public"]["Enums"]["offer_status"]
          transporter_id: string
          updated_at: string | null
          vehicle_id: string
        }
        Insert: {
          cargo_id: string
          created_at?: string | null
          driver_id: string
          estimated_delivery_time?: string | null
          estimated_pickup_time?: string | null
          id?: string
          is_deleted?: boolean | null
          notes_to_shipper?: string | null
          price: number
          responded_at?: string | null
          special_features?: string | null
          status?: Database["public"]["Enums"]["offer_status"]
          transporter_id: string
          updated_at?: string | null
          vehicle_id: string
        }
        Update: {
          cargo_id?: string
          created_at?: string | null
          driver_id?: string
          estimated_delivery_time?: string | null
          estimated_pickup_time?: string | null
          id?: string
          is_deleted?: boolean | null
          notes_to_shipper?: string | null
          price?: number
          responded_at?: string | null
          special_features?: string | null
          status?: Database["public"]["Enums"]["offer_status"]
          transporter_id?: string
          updated_at?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "price_offers_cargo_id_fkey"
            columns: ["cargo_id"]
            isOneToOne: false
            referencedRelation: "cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "price_offers_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "price_offers_transporter_id_fkey"
            columns: ["transporter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "price_offers_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          app_language: Database["public"]["Enums"]["app_language"] | null
          app_theme: Database["public"]["Enums"]["app_theme"] | null
          average_rating: number | null
          business_entity_type:
            | Database["public"]["Enums"]["business_entity_type"]
            | null
          company_address: string | null
          company_name: string | null
          created_at: string | null
          email: string
          font_size: number | null
          full_name: string | null
          id: string
          is_active: boolean | null
          last_login_at: string | null
          last_sync_at: string | null
          notification_enabled: boolean | null
          phone_number: string | null
          profile_image_url: string | null
          shipper_field:
            | Database["public"]["Enums"]["shipper_business_field"]
            | null
          total_ratings: number | null
          transporter_field:
            | Database["public"]["Enums"]["transporter_business_field"]
            | null
          updated_at: string | null
          user_type: Database["public"]["Enums"]["user_type"] | null
        }
        Insert: {
          app_language?: Database["public"]["Enums"]["app_language"] | null
          app_theme?: Database["public"]["Enums"]["app_theme"] | null
          average_rating?: number | null
          business_entity_type?:
            | Database["public"]["Enums"]["business_entity_type"]
            | null
          company_address?: string | null
          company_name?: string | null
          created_at?: string | null
          email: string
          font_size?: number | null
          full_name?: string | null
          id: string
          is_active?: boolean | null
          last_login_at?: string | null
          last_sync_at?: string | null
          notification_enabled?: boolean | null
          phone_number?: string | null
          profile_image_url?: string | null
          shipper_field?:
            | Database["public"]["Enums"]["shipper_business_field"]
            | null
          total_ratings?: number | null
          transporter_field?:
            | Database["public"]["Enums"]["transporter_business_field"]
            | null
          updated_at?: string | null
          user_type?: Database["public"]["Enums"]["user_type"] | null
        }
        Update: {
          app_language?: Database["public"]["Enums"]["app_language"] | null
          app_theme?: Database["public"]["Enums"]["app_theme"] | null
          average_rating?: number | null
          business_entity_type?:
            | Database["public"]["Enums"]["business_entity_type"]
            | null
          company_address?: string | null
          company_name?: string | null
          created_at?: string | null
          email?: string
          font_size?: number | null
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          last_login_at?: string | null
          last_sync_at?: string | null
          notification_enabled?: boolean | null
          phone_number?: string | null
          profile_image_url?: string | null
          shipper_field?:
            | Database["public"]["Enums"]["shipper_business_field"]
            | null
          total_ratings?: number | null
          transporter_field?:
            | Database["public"]["Enums"]["transporter_business_field"]
            | null
          updated_at?: string | null
          user_type?: Database["public"]["Enums"]["user_type"] | null
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          auth_key: string
          created_at: string | null
          device_info: Json | null
          endpoint: string
          id: string
          is_active: boolean | null
          p256dh_key: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auth_key: string
          created_at?: string | null
          device_info?: Json | null
          endpoint: string
          id?: string
          is_active?: boolean | null
          p256dh_key: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auth_key?: string
          created_at?: string | null
          device_info?: Json | null
          endpoint?: string
          id?: string
          is_active?: boolean | null
          p256dh_key?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "push_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pwa_configuration: {
        Row: {
          app_description: string
          app_name: string
          app_short_name: string
          background_color: string
          created_at: string | null
          display: string
          icon_src_192: string | null
          icon_src_512: string | null
          id: string
          is_active: boolean | null
          orientation: string
          scope: string
          start_url: string
          theme_color: string
          updated_at: string | null
        }
        Insert: {
          app_description?: string
          app_name?: string
          app_short_name?: string
          background_color?: string
          created_at?: string | null
          display?: string
          icon_src_192?: string | null
          icon_src_512?: string | null
          id?: string
          is_active?: boolean | null
          orientation?: string
          scope?: string
          start_url?: string
          theme_color?: string
          updated_at?: string | null
        }
        Update: {
          app_description?: string
          app_name?: string
          app_short_name?: string
          background_color?: string
          created_at?: string | null
          display?: string
          icon_src_192?: string | null
          icon_src_512?: string | null
          id?: string
          is_active?: boolean | null
          orientation?: string
          scope?: string
          start_url?: string
          theme_color?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ratings_reviews: {
        Row: {
          cargo_id: string
          created_at: string | null
          id: string
          rating: number
          review: string | null
          reviewed_id: string
          reviewer_id: string
          updated_at: string | null
        }
        Insert: {
          cargo_id: string
          created_at?: string | null
          id?: string
          rating: number
          review?: string | null
          reviewed_id: string
          reviewer_id: string
          updated_at?: string | null
        }
        Update: {
          cargo_id?: string
          created_at?: string | null
          id?: string
          rating?: number
          review?: string | null
          reviewed_id?: string
          reviewer_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ratings_reviews_cargo_id_fkey"
            columns: ["cargo_id"]
            isOneToOne: false
            referencedRelation: "cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_reviews_reviewed_id_fkey"
            columns: ["reviewed_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_routes: {
        Row: {
          available_capacity_volume: number | null
          available_capacity_weight: number | null
          created_at: string | null
          departure_time: string | null
          destination_address: string
          destination_location: unknown
          estimated_arrival_time: string | null
          id: string
          is_active: boolean | null
          name: string
          notes: string | null
          origin_address: string
          origin_location: unknown
          recurring_days: number[] | null
          transporter_id: string
          updated_at: string | null
          vehicle_type: Database["public"]["Enums"]["vehicle_type"] | null
        }
        Insert: {
          available_capacity_volume?: number | null
          available_capacity_weight?: number | null
          created_at?: string | null
          departure_time?: string | null
          destination_address: string
          destination_location: unknown
          estimated_arrival_time?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          notes?: string | null
          origin_address: string
          origin_location: unknown
          recurring_days?: number[] | null
          transporter_id: string
          updated_at?: string | null
          vehicle_type?: Database["public"]["Enums"]["vehicle_type"] | null
        }
        Update: {
          available_capacity_volume?: number | null
          available_capacity_weight?: number | null
          created_at?: string | null
          departure_time?: string | null
          destination_address?: string
          destination_location?: unknown
          estimated_arrival_time?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          notes?: string | null
          origin_address?: string
          origin_location?: unknown
          recurring_days?: number[] | null
          transporter_id?: string
          updated_at?: string | null
          vehicle_type?: Database["public"]["Enums"]["vehicle_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "recurring_routes_transporter_id_fkey"
            columns: ["transporter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_searches: {
        Row: {
          created_at: string | null
          filter_criteria: Json
          id: string
          is_active: boolean | null
          name: string
          search_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          filter_criteria: Json
          id?: string
          is_active?: boolean | null
          name: string
          search_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          filter_criteria?: Json
          id?: string
          is_active?: boolean | null
          name?: string
          search_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_searches_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      status_history: {
        Row: {
          changed_by: string
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          new_status: string
          notes: string | null
          previous_status: string | null
        }
        Insert: {
          changed_by: string
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          new_status: string
          notes?: string | null
          previous_status?: string | null
        }
        Update: {
          changed_by?: string
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          new_status?: string
          notes?: string | null
          previous_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_packages: {
        Row: {
          badge_text: string | null
          created_at: string | null
          description: string | null
          duration_days: number
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          recommended: boolean | null
          shipper_cargo_quota: number
          transporter_driver_quota: number
          transporter_offer_quota: number
          transporter_vehicle_quota: number
          type: Database["public"]["Enums"]["subscription_type"]
          updated_at: string | null
        }
        Insert: {
          badge_text?: string | null
          created_at?: string | null
          description?: string | null
          duration_days?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          recommended?: boolean | null
          shipper_cargo_quota: number
          transporter_driver_quota: number
          transporter_offer_quota: number
          transporter_vehicle_quota: number
          type: Database["public"]["Enums"]["subscription_type"]
          updated_at?: string | null
        }
        Update: {
          badge_text?: string | null
          created_at?: string | null
          description?: string | null
          duration_days?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          recommended?: boolean | null
          shipper_cargo_quota?: number
          transporter_driver_quota?: number
          transporter_offer_quota?: number
          transporter_vehicle_quota?: number
          type?: Database["public"]["Enums"]["subscription_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      sync_queue: {
        Row: {
          created_at: string | null
          device_id: string
          entity_id: string | null
          error_message: string | null
          id: string
          operation: string
          priority: number | null
          processed_at: string | null
          retry_count: number | null
          status: Database["public"]["Enums"]["sync_status"] | null
          sync_data: Json
          table_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_id: string
          entity_id?: string | null
          error_message?: string | null
          id?: string
          operation: string
          priority?: number | null
          processed_at?: string | null
          retry_count?: number | null
          status?: Database["public"]["Enums"]["sync_status"] | null
          sync_data: Json
          table_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_id?: string
          entity_id?: string | null
          error_message?: string | null
          id?: string
          operation?: string
          priority?: number | null
          processed_at?: string | null
          retry_count?: number | null
          status?: Database["public"]["Enums"]["sync_status"] | null
          sync_data?: Json
          table_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sync_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity_logs: {
        Row: {
          activity_type: string
          created_at: string | null
          description: string | null
          id: string
          ip_address: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_activity_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_quotas: {
        Row: {
          created_at: string | null
          id: string
          last_reset_date: string
          next_reset_date: string
          remaining_cargo_posts: number | null
          remaining_drivers: number | null
          remaining_price_offers: number | null
          remaining_vehicles: number | null
          subscription_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_reset_date?: string
          next_reset_date: string
          remaining_cargo_posts?: number | null
          remaining_drivers?: number | null
          remaining_price_offers?: number | null
          remaining_vehicles?: number | null
          subscription_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_reset_date?: string
          next_reset_date?: string
          remaining_cargo_posts?: number | null
          remaining_drivers?: number | null
          remaining_price_offers?: number | null
          remaining_vehicles?: number | null
          subscription_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_quotas_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_quotas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          created_at: string | null
          end_date: string
          id: string
          is_auto_renew: boolean | null
          package_id: string
          payment_id: string | null
          start_date: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          end_date: string
          id?: string
          is_auto_renew?: boolean | null
          package_id: string
          payment_id?: string | null
          start_date?: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          end_date?: string
          id?: string
          is_auto_renew?: boolean | null
          package_id?: string
          payment_id?: string | null
          start_date?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "subscription_packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_sessions: {
        Row: {
          created_at: string | null
          driver_id: string | null
          id: string
          is_active: boolean | null
          last_known_location: unknown | null
          last_updated_at: string | null
          session_end_time: string | null
          session_start_time: string | null
          updated_at: string | null
          vehicle_id: string
        }
        Insert: {
          created_at?: string | null
          driver_id?: string | null
          id?: string
          is_active?: boolean | null
          last_known_location?: unknown | null
          last_updated_at?: string | null
          session_end_time?: string | null
          session_start_time?: string | null
          updated_at?: string | null
          vehicle_id: string
        }
        Update: {
          created_at?: string | null
          driver_id?: string | null
          id?: string
          is_active?: boolean | null
          last_known_location?: unknown | null
          last_updated_at?: string | null
          session_end_time?: string | null
          session_start_time?: string | null
          updated_at?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_sessions_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_sessions_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_statistics: {
        Row: {
          cancelled_assignments: number | null
          completed_assignments: number | null
          created_at: string | null
          id: string
          last_assignment_date: string | null
          total_assignments: number | null
          total_distance: number | null
          updated_at: string | null
          vehicle_id: string
        }
        Insert: {
          cancelled_assignments?: number | null
          completed_assignments?: number | null
          created_at?: string | null
          id?: string
          last_assignment_date?: string | null
          total_assignments?: number | null
          total_distance?: number | null
          updated_at?: string | null
          vehicle_id: string
        }
        Update: {
          cancelled_assignments?: number | null
          completed_assignments?: number | null
          created_at?: string | null
          id?: string
          last_assignment_date?: string | null
          total_assignments?: number | null
          total_distance?: number | null
          updated_at?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_statistics_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles: {
        Row: {
          capacity_volume: number | null
          capacity_weight: number | null
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          last_known_location: unknown | null
          last_location_updated_at: string | null
          license_plate: string
          manufacturing_year: number | null
          name: string
          owner_id: string
          photo_url: string | null
          type: Database["public"]["Enums"]["vehicle_type"]
          updated_at: string | null
        }
        Insert: {
          capacity_volume?: number | null
          capacity_weight?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          last_known_location?: unknown | null
          last_location_updated_at?: string | null
          license_plate: string
          manufacturing_year?: number | null
          name: string
          owner_id: string
          photo_url?: string | null
          type: Database["public"]["Enums"]["vehicle_type"]
          updated_at?: string | null
        }
        Update: {
          capacity_volume?: number | null
          capacity_weight?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          last_known_location?: unknown | null
          last_location_updated_at?: string | null
          license_plate?: string
          manufacturing_year?: number | null
          name?: string
          owner_id?: string
          photo_url?: string | null
          type?: Database["public"]["Enums"]["vehicle_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown | null
          f_table_catalog: unknown | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown | null
          f_table_catalog: string | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { oldname: string; newname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string }
        Returns: unknown
      }
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_selectivity: {
        Args: { tbl: unknown; att_name: string; geom: unknown; mode?: string }
        Returns: number
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_bestsrid: {
        Args: { "": unknown }
        Returns: number
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_pointoutside: {
        Args: { "": unknown }
        Returns: unknown
      }
      _st_sortablehash: {
        Args: { geom: unknown }
        Returns: number
      }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          g1: unknown
          clip?: unknown
          tolerance?: number
          return_polygons?: boolean
        }
        Returns: unknown
      }
      _st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      addauth: {
        Args: { "": string }
        Returns: boolean
      }
      addgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
              new_srid_in: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              schema_name: string
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
        Returns: string
      }
      box: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box3d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3dtobox: {
        Args: { "": unknown }
        Returns: unknown
      }
      bytea: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      clean_expired_cache: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_push_notification: {
        Args: {
          p_user_id: string
          p_title: string
          p_message: string
          p_icon?: string
          p_url?: string
          p_data?: Json
        }
        Returns: undefined
      }
      disablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      dropgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
            }
          | { schema_name: string; table_name: string; column_name: string }
          | { table_name: string; column_name: string }
        Returns: string
      }
      dropgeometrytable: {
        Args:
          | { catalog_name: string; schema_name: string; table_name: string }
          | { schema_name: string; table_name: string }
          | { table_name: string }
        Returns: string
      }
      enablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      find_nearest_transporters: {
        Args: {
          pickup_location: unknown
          max_distance_km?: number
          limit_count?: number
        }
        Returns: {
          transporter_id: string
          distance_km: number
          company_name: string
          average_rating: number
          total_ratings: number
          last_known_location: unknown
        }[]
      }
      geography: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      geography_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geography_gist_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_gist_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_send: {
        Args: { "": unknown }
        Returns: string
      }
      geography_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geography_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry: {
        Args:
          | { "": string }
          | { "": string }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
        Returns: unknown
      }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_sortsupport_2d: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_hash: {
        Args: { "": unknown }
        Returns: number
      }
      geometry_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_send: {
        Args: { "": unknown }
        Returns: string
      }
      geometry_sortsupport: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_spgist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_3d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geometry_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometrytype: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      get_cargo_map_data: {
        Args: {
          p_user_location?: unknown
          p_max_distance_km?: number
          p_cargo_type?: Database["public"]["Enums"]["cargo_type"]
          p_transportation_mode?: Database["public"]["Enums"]["transportation_mode"]
          p_required_vehicle_type?: Database["public"]["Enums"]["vehicle_type"]
          p_pickup_deadline_start?: string
          p_pickup_deadline_end?: string
          p_delivery_deadline_start?: string
          p_delivery_deadline_end?: string
          p_min_budget?: number
          p_max_budget?: number
        }
        Returns: {
          cargo_id: string
          title: string
          shipper_id: string
          shipper_name: string
          shipper_rating: number
          pickup_location: unknown
          pickup_address: string
          destination_location: unknown
          destination_address: string
          pickup_deadline: string
          delivery_deadline: string
          cargo_type: Database["public"]["Enums"]["cargo_type"]
          weight: number
          volume: number
          transportation_mode: Database["public"]["Enums"]["transportation_mode"]
          required_vehicle_type: Database["public"]["Enums"]["vehicle_type"]
          budget: number
          distance_from_user: number
          status: Database["public"]["Enums"]["cargo_status"]
          created_at: string
        }[]
      }
      get_marketplace_snapshot: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_active_cargos: number
          total_active_shippers: number
          total_active_transporters: number
          recent_cargo_locations: Json
          cargo_type_distribution: Json
          transportation_mode_distribution: Json
        }[]
      }
      get_proj4_from_srid: {
        Args: { "": number }
        Returns: string
      }
      get_shipper_usage_metrics: {
        Args: { p_shipper_id: string }
        Returns: {
          total_cargos: number
          active_cargos: number
          completed_cargos: number
          quota_cargos: number
          used_cargos: number
          remaining_cargos: number
          subscription_type: string
          subscription_end_date: string
        }[]
      }
      get_transporter_usage_metrics: {
        Args: { p_transporter_id: string }
        Returns: {
          total_vehicles: number
          active_vehicles: number
          total_drivers: number
          active_drivers: number
          quota_vehicles: number
          quota_drivers: number
          quota_offers: number
          used_offers: number
          remaining_offers: number
          subscription_type: string
          subscription_end_date: string
        }[]
      }
      gettransactionid: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      gidx_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gidx_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      has_active_subscription: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      has_cargo_post_quota: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      has_driver_quota: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      has_price_offer_quota: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      has_vehicle_quota: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_assigned_transporter: {
        Args: { cargo_id: string }
        Returns: boolean
      }
      is_cargo_owner: {
        Args: { cargo_id: string }
        Returns: boolean
      }
      is_driver_owner: {
        Args: { driver_id: string }
        Returns: boolean
      }
      is_offer_owner: {
        Args: { offer_id: string }
        Returns: boolean
      }
      is_profile_complete: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_shipper: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_transporter: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_vehicle_owner: {
        Args: { vehicle_id: string }
        Returns: boolean
      }
      json: {
        Args: { "": unknown }
        Returns: Json
      }
      jsonb: {
        Args: { "": unknown }
        Returns: Json
      }
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      monitor_quota_usage: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      path: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_asflatgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_geometry_clusterintersecting_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_clusterwithin_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_collect_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_makeline_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_polygonize_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      point: {
        Args: { "": unknown }
        Returns: unknown
      }
      polygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      populate_geometry_columns: {
        Args:
          | { tbl_oid: unknown; use_typmod?: boolean }
          | { use_typmod?: boolean }
        Returns: string
      }
      postgis_addbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: string
      }
      postgis_dropbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_full_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_geos_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_geos_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_getbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_hasbbox: {
        Args: { "": unknown }
        Returns: boolean
      }
      postgis_index_supportfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_proj_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_svn_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_type_name: {
        Args: {
          geomname: string
          coord_dimension: number
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_typmod_dims: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_srid: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_type: {
        Args: { "": number }
        Returns: string
      }
      postgis_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      process_sync_queue: {
        Args: { batch_size?: number }
        Returns: number
      }
      reset_monthly_quotas: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      spheroid_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlength: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dperimeter: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle: {
        Args:
          | { line1: unknown; line2: unknown }
          | { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
        Returns: number
      }
      st_area: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_area2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_asbinary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_asewkt: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asgeojson: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; options?: number }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              r: Record<string, unknown>
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
            }
        Returns: string
      }
      st_asgml: {
        Args:
          | { "": string }
          | {
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              version: number
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | {
              version: number
              geom: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
        Returns: string
      }
      st_ashexewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_askml: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
          | { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
        Returns: string
      }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: {
        Args: { geom: unknown; format?: string }
        Returns: string
      }
      st_asmvtgeom: {
        Args: {
          geom: unknown
          bounds: unknown
          extent?: number
          buffer?: number
          clip_geom?: boolean
        }
        Returns: unknown
      }
      st_assvg: {
        Args:
          | { "": string }
          | { geog: unknown; rel?: number; maxdecimaldigits?: number }
          | { geom: unknown; rel?: number; maxdecimaldigits?: number }
        Returns: string
      }
      st_astext: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_astwkb: {
        Args:
          | {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
          | {
              geom: unknown
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
        Returns: string
      }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_boundary: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_boundingdiagonal: {
        Args: { geom: unknown; fits?: boolean }
        Returns: unknown
      }
      st_buffer: {
        Args:
          | { geom: unknown; radius: number; options?: string }
          | { geom: unknown; radius: number; quadsegs: number }
        Returns: unknown
      }
      st_buildarea: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_centroid: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      st_cleangeometry: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_clusterintersecting: {
        Args: { "": unknown[] }
        Returns: unknown[]
      }
      st_collect: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collectionextract: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_collectionhomogenize: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_concavehull: {
        Args: {
          param_geom: unknown
          param_pctconvex: number
          param_allow_holes?: boolean
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_convexhull: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_coorddim: {
        Args: { geometry: unknown }
        Returns: number
      }
      st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_curvetoline: {
        Args: { geom: unknown; tol?: number; toltype?: number; flags?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance?: number; flags?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_dimension: {
        Args: { "": unknown }
        Returns: number
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance: {
        Args:
          | { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_distancesphere: {
        Args:
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; radius: number }
        Returns: number
      }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dump: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumppoints: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumprings: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumpsegments: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_endpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_envelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_expand: {
        Args:
          | { box: unknown; dx: number; dy: number }
          | { box: unknown; dx: number; dy: number; dz?: number }
          | { geom: unknown; dx: number; dy: number; dz?: number; dm?: number }
        Returns: unknown
      }
      st_exteriorring: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_flipcoordinates: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force3d: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; zvalue?: number; mvalue?: number }
        Returns: unknown
      }
      st_forcecollection: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcecurve: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygonccw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygoncw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcerhr: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcesfs: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_generatepoints: {
        Args:
          | { area: unknown; npoints: number }
          | { area: unknown; npoints: number; seed: number }
        Returns: unknown
      }
      st_geogfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geogfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geographyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geohash: {
        Args:
          | { geog: unknown; maxchars?: number }
          | { geom: unknown; maxchars?: number }
        Returns: string
      }
      st_geomcollfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomcollfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometricmedian: {
        Args: {
          g: unknown
          tolerance?: number
          max_iter?: number
          fail_if_not_converged?: boolean
        }
        Returns: unknown
      }
      st_geometryfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometrytype: {
        Args: { "": unknown }
        Returns: string
      }
      st_geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromgeojson: {
        Args: { "": Json } | { "": Json } | { "": string }
        Returns: unknown
      }
      st_geomfromgml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromkml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfrommarc21: {
        Args: { marc21xml: string }
        Returns: unknown
      }
      st_geomfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromtwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_gmltosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_hasarc: {
        Args: { geometry: unknown }
        Returns: boolean
      }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_isclosed: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_iscollection: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isempty: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygonccw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygoncw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isring: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_issimple: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvalid: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvaliddetail: {
        Args: { geom: unknown; flags?: number }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
      }
      st_isvalidreason: {
        Args: { "": unknown }
        Returns: string
      }
      st_isvalidtrajectory: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_length: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_length2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_letters: {
        Args: { letters: string; font?: Json }
        Returns: unknown
      }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { txtin: string; nprecision?: number }
        Returns: unknown
      }
      st_linefrommultipoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_linefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linemerge: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linestringfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linetocurve: {
        Args: { geometry: unknown }
        Returns: unknown
      }
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset?: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          geometry: unknown
          frommeasure: number
          tomeasure: number
          leftrightoffset?: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { geometry: unknown; fromelevation: number; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_m: {
        Args: { "": unknown }
        Returns: number
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makepolygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { "": unknown } | { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_maximuminscribedcircle: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_memsize: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_minimumboundingradius: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_minimumclearance: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumclearanceline: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_mlinefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mlinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multi: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_multilinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multilinestringfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_ndims: {
        Args: { "": unknown }
        Returns: number
      }
      st_node: {
        Args: { g: unknown }
        Returns: unknown
      }
      st_normalize: {
        Args: { geom: unknown }
        Returns: unknown
      }
      st_npoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_nrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numgeometries: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorring: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpatches: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_offsetcurve: {
        Args: { line: unknown; distance: number; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_orientedenvelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { "": unknown } | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_perimeter2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_pointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointonsurface: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_points: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_polyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonize: {
        Args: { "": unknown[] }
        Returns: unknown
      }
      st_project: {
        Args: { geog: unknown; distance: number; azimuth: number }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_x: number
          prec_y?: number
          prec_z?: number
          prec_m?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: string
      }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_reverse: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid: {
        Args: { geog: unknown; srid: number } | { geom: unknown; srid: number }
        Returns: unknown
      }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shiftlongitude: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; vertex_fraction: number; is_outer?: boolean }
        Returns: unknown
      }
      st_split: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_square: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_srid: {
        Args: { geog: unknown } | { geom: unknown }
        Returns: number
      }
      st_startpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_subdivide: {
        Args: { geom: unknown; maxvertices?: number; gridsize?: number }
        Returns: unknown[]
      }
      st_summary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          zoom: number
          x: number
          y: number
          bounds?: unknown
          margin?: number
        }
        Returns: unknown
      }
      st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_transform: {
        Args:
          | { geom: unknown; from_proj: string; to_proj: string }
          | { geom: unknown; from_proj: string; to_srid: number }
          | { geom: unknown; to_proj: string }
        Returns: unknown
      }
      st_triangulatepolygon: {
        Args: { g1: unknown }
        Returns: unknown
      }
      st_union: {
        Args:
          | { "": unknown[] }
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; gridsize: number }
        Returns: unknown
      }
      st_voronoilines: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_wkbtosql: {
        Args: { wkb: string }
        Returns: unknown
      }
      st_wkttosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_wrapx: {
        Args: { geom: unknown; wrap: number; move: number }
        Returns: unknown
      }
      st_x: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmin: {
        Args: { "": unknown }
        Returns: number
      }
      st_y: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymax: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymin: {
        Args: { "": unknown }
        Returns: number
      }
      st_z: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmflag: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmin: {
        Args: { "": unknown }
        Returns: number
      }
      text: {
        Args: { "": unknown }
        Returns: string
      }
      unlockrows: {
        Args: { "": string }
        Returns: number
      }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          schema_name: string
          table_name: string
          column_name: string
          new_srid_in: number
        }
        Returns: string
      }
    }
    Enums: {
      app_language: "id" | "en"
      app_theme: "light" | "dark"
      business_entity_type: "Perorangan" | "CV" | "PT" | "Koperasi" | "Lainnya"
      cargo_status:
        | "draft"
        | "published"
        | "assigned"
        | "pickup_ready"
        | "in_transit"
        | "delivered"
        | "completed"
        | "cancelled"
      cargo_type:
        | "general"
        | "fragile"
        | "perishable"
        | "hazardous"
        | "oversized"
        | "liquid"
        | "livestock"
        | "electronics"
        | "furniture"
        | "construction"
        | "other"
      notification_type:
        | "cargo_published"
        | "offer_received"
        | "offer_accepted"
        | "offer_rejected"
        | "cargo_assigned"
        | "cargo_status_updated"
        | "cargo_completed"
        | "rating_received"
        | "quota_low"
        | "subscription_expiring"
        | "payment_success"
        | "payment_failed"
      offer_status:
        | "pending"
        | "accepted"
        | "rejected"
        | "cancelled"
        | "expired"
      offline_action_status: "pending" | "synced" | "failed"
      offline_action_type:
        | "create_cargo"
        | "update_cargo"
        | "create_offer"
        | "update_cargo_status"
        | "create_rating"
      payment_status:
        | "pending"
        | "processing"
        | "completed"
        | "failed"
        | "refunded"
      shipper_business_field:
        | "Perdagangan Umum"
        | "Manufaktur"
        | "Pertanian"
        | "Perkebunan"
        | "Pertambangan"
        | "Konstruksi"
        | "Makanan & Minuman"
        | "Tekstil & Garmen"
        | "Elektronik"
        | "Otomotif"
        | "Kimia"
        | "Farmasi"
        | "Retail"
        | "Jasa"
        | "Lainnya"
      subscription_type:
        | "free"
        | "standard"
        | "premium"
        | "business"
        | "enterprise"
      sync_status: "pending" | "synced" | "conflict" | "failed"
      transportation_mode: "land" | "sea" | "air"
      transporter_business_field:
        | "Ekspedisi Muatan Jalan Raya (EMJR)"
        | "Trucking"
        | "Freight Forwarding"
        | "Shipping Line"
        | "Kurir"
        | "Pergudangan"
        | "Logistik 3PL"
        | "Rental Kendaraan Komersial"
        | "Lainnya"
      user_type: "shipper" | "transporter"
      vehicle_type:
        | "pickup"
        | "box_truck"
        | "flatbed_truck"
        | "container_truck"
        | "refrigerated"
        | "tanker"
        | "lowbed"
        | "cargo_ship"
        | "cargo_plane"
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_language: ["id", "en"],
      app_theme: ["light", "dark"],
      business_entity_type: ["Perorangan", "CV", "PT", "Koperasi", "Lainnya"],
      cargo_status: [
        "draft",
        "published",
        "assigned",
        "pickup_ready",
        "in_transit",
        "delivered",
        "completed",
        "cancelled",
      ],
      cargo_type: [
        "general",
        "fragile",
        "perishable",
        "hazardous",
        "oversized",
        "liquid",
        "livestock",
        "electronics",
        "furniture",
        "construction",
        "other",
      ],
      notification_type: [
        "cargo_published",
        "offer_received",
        "offer_accepted",
        "offer_rejected",
        "cargo_assigned",
        "cargo_status_updated",
        "cargo_completed",
        "rating_received",
        "quota_low",
        "subscription_expiring",
        "payment_success",
        "payment_failed",
      ],
      offer_status: ["pending", "accepted", "rejected", "cancelled", "expired"],
      offline_action_status: ["pending", "synced", "failed"],
      offline_action_type: [
        "create_cargo",
        "update_cargo",
        "create_offer",
        "update_cargo_status",
        "create_rating",
      ],
      payment_status: [
        "pending",
        "processing",
        "completed",
        "failed",
        "refunded",
      ],
      shipper_business_field: [
        "Perdagangan Umum",
        "Manufaktur",
        "Pertanian",
        "Perkebunan",
        "Pertambangan",
        "Konstruksi",
        "Makanan & Minuman",
        "Tekstil & Garmen",
        "Elektronik",
        "Otomotif",
        "Kimia",
        "Farmasi",
        "Retail",
        "Jasa",
        "Lainnya",
      ],
      subscription_type: [
        "free",
        "standard",
        "premium",
        "business",
        "enterprise",
      ],
      sync_status: ["pending", "synced", "conflict", "failed"],
      transportation_mode: ["land", "sea", "air"],
      transporter_business_field: [
        "Ekspedisi Muatan Jalan Raya (EMJR)",
        "Trucking",
        "Freight Forwarding",
        "Shipping Line",
        "Kurir",
        "Pergudangan",
        "Logistik 3PL",
        "Rental Kendaraan Komersial",
        "Lainnya",
      ],
      user_type: ["shipper", "transporter"],
      vehicle_type: [
        "pickup",
        "box_truck",
        "flatbed_truck",
        "container_truck",
        "refrigerated",
        "tanker",
        "lowbed",
        "cargo_ship",
        "cargo_plane",
      ],
    },
  },
} as const
