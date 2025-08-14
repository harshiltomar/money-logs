import { getTemporaryAccessToken } from '@/actions/get-temorary-access-token';
import SchematicEmbed from './schematic-embed';

async function SchematicComponent({componentId}: {componentId?: string}) {

    if(!componentId) {
        return null;
    }

    const accessToken = await getTemporaryAccessToken();

    if(!accessToken) {
        throw new Error("Failed to get temporary access token");
    }

  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />
}

export default SchematicComponent;