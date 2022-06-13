#  initialize the application
eb init udagram-api --platform node.js --region us-east-1


eb create udagram-api-dev
# use the environment
eb use udagram-api-dev

#deploy
eb deploy udagram-api-dev

#setenv
eb setenv AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" AWS_DEFAULT_REGION="$AWS_DEFAULT_REGION" POSTGRES_USERNAME="$POSTGRES_USERNAME" POSTGRES_PASSWORD="$POSTGRES_PASSWORD" POSTGRES_DB="$POSTGRES_DB" PORT="$PORT" POSTGRES_HOST="$POSTGRES_HOST" S3_AWS_REGION_S3="$S3_AWS_REGION_S3" S3_AWS_PROFILE_S3="$S3_AWS_PROFILE_S3" S3_AWS_BUCKET_S3="$S3_AWS_BUCKET_S3" URL="$URL" DB_PORT="$DB_PORT" JWT_SECRET="$JWT_SECRET"

