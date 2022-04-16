/* eslint-disable prefer-destructuring */
/**
 * !This file required to centralize the environment variables.
 * */
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * * Server basic configuration.
 * */
const NODE_ENV = process.env.NODE_ENV;
const APP_VERSION = process.env.npm_package_version;
const SERVER_PORT = process.env.SERVER_PORT || 4200;
const SERVER_ALLOWED_ORIGIN =
  process.env.SERVER_ALLOWED_ORIGIN?.split(',') || [];
const PASS_PHRASE = process.env.PASS_PHRASE || '';

/**
 * Database configuration
 * */
const DB_USER_NAME = process.env.DB_USER_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_SERVER = process.env.DB_SERVER;

/**
 * Mail configuration
 * */
const MAIL_HOST = process.env.MAIL_HOST || '';
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

/**
 * Redis configuration
 * */
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT || '';
const REDIS_PASS = process.env.REDIS_PASS;

/**
 * * Winston configuration.
 * */
const WINSTON_LOG_DIR = process.env.WINSTON_LOG_DIR || 'logs';
const WINSTON_LOG_LEVEL = IS_PRODUCTION ? 'error' : 'debug';

/**
 * Base API
 * */
const BASE_API = IS_PRODUCTION ? '' : 'http://localhost';

export default {
  APP_VERSION,
  BASE_API,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_SERVER,
  DB_USER_NAME,
  IS_PRODUCTION,
  MAIL_HOST,
  MAIL_PASS,
  MAIL_PORT,
  MAIL_USER,
  NODE_ENV,
  PASS_PHRASE,
  REDIS_HOST,
  REDIS_PASS,
  REDIS_PORT,
  SERVER_ALLOWED_ORIGIN,
  SERVER_PORT,
  WINSTON_LOG_DIR,
  WINSTON_LOG_LEVEL,
};
