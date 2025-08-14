import SchematicComponent from '@/components/schematic/schematic-component'
import React from 'react'

export default function page() {
  return (
    <div>
        <SchematicComponent
            componentId={process.env.NEXT_PUBLIC_SCHEMATIC_CUSTOMER_PORTAL_COMPONENT_ID!}
        />
    </div>
  )
}
